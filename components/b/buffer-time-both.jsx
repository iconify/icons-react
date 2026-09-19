import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_baxobfl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_baxobfl"/>`,
		"fallback": "fluent-mdl2:buffer-time-both",
	});
}

export default Component;
