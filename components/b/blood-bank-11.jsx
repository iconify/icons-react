import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj3orgbgr.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj3orgbgr"/>`,
		"fallback": "maki:blood-bank-11",
	});
}

export default Component;
