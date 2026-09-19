import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zugda47zj.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zugda47zj"/>`,
		"fallback": "fa-brands:glide",
	});
}

export default Component;
