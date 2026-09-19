import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/injpc11dk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="injpc11dk"/>`,
		"fallback": "fluent-mdl2:gripper-dots-vertical",
	});
}

export default Component;
