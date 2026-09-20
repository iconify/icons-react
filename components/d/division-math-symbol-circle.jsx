import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/y/ytv9fhmnj.css';
import '../../css/u/uy-48gbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="ytv9fhmnj"/><path class="uy-48gbay"/></g>`,
		"fallback": "streamline-ultimate:division-math-symbol-circle",
	});
}

export default Component;
