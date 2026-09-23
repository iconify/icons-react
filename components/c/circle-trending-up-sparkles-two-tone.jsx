import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e1_6k6xoi.css';
import '../../css/t/t2f0xziff.css';
import '../../css/x/x-s2jvb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e1_6k6xoi"/><path class="t2f0xziff"/><path class="x-s2jvb3g"/></g>`,
		"fallback": "keyline-icons:circle-trending-up-sparkles-two-tone",
	});
}

export default Component;
