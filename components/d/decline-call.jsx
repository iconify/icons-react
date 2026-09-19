import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9qaknzwm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9qaknzwm"/>`,
		"fallback": "fluent-mdl2:decline-call",
	});
}

export default Component;
