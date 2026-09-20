import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrs40vbfe.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrs40vbfe"/>`,
		"fallback": "memory:box-light-round-up-right-stipple-outer",
	});
}

export default Component;
