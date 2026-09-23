import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qve2v4lpf.css';
import '../../css/t/t2f0xziff.css';
import '../../css/u/ucn6k4h_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qve2v4lpf"/><path class="t2f0xziff"/><path class="ucn6k4h_l"/></g>`,
		"fallback": "keyline-icons:eraser-sparkles-two-tone",
	});
}

export default Component;
