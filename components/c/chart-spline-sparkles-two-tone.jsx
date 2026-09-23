import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylvvsozxa.css';
import '../../css/i/i0e4rqb2u.css';
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
		"content": `<g class="nrj6p8qat"><path class="ylvvsozxa"/><path class="i0e4rqb2u"/><path class="t2f0xziff"/><path class="x-s2jvb3g"/></g>`,
		"fallback": "keyline-icons:chart-spline-sparkles-two-tone",
	});
}

export default Component;
