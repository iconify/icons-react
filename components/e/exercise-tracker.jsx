import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0nzc_x5n.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0nzc_x5n"/>`,
		"fallback": "fluent-mdl2:exercise-tracker",
	});
}

export default Component;
