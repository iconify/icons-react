import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvfx_tb0d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvfx_tb0d"/>`,
		"fallback": "fluent-emoji-high-contrast:envelope",
	});
}

export default Component;
