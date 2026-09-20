import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1m-5accb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1m-5accb"/>`,
		"fallback": "temaki:fountain",
	});
}

export default Component;
