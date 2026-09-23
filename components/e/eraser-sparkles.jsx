import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qve2v4lpf.css';
import '../../css/w/w80tmy0nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qve2v4lpf"/><path class="w80tmy0nj"/></g>`,
		"fallback": "keyline-icons:eraser-sparkles",
	});
}

export default Component;
