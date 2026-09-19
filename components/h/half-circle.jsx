import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxrd3hbvx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxrd3hbvx"/>`,
		"fallback": "fluent-mdl2:half-circle",
	});
}

export default Component;
