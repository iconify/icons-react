import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6u9h6rvk.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6u9h6rvk"/>`,
		"fallback": "maki:bakery-11",
	});
}

export default Component;
