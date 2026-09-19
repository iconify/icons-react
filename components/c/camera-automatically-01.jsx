import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-hyj2x6a.css';
import '../../css/f/fwl6ucbbe.css';
import '../../css/y/y4mfbjt5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y-hyj2x6a"/><path class="fwl6ucbbe"/><path class="y4mfbjt5e"/></g>`,
		"fallback": "hugeicons:camera-automatically-01",
	});
}

export default Component;
