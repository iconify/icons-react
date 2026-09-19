import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz0f-ub_i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz0f-ub_i"/>`,
		"fallback": "fluent-mdl2:device-run",
	});
}

export default Component;
