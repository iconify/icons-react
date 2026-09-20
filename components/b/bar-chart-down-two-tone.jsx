import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-8wz9b1s.css';
import '../../css/m/ml9xssolm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j-8wz9b1s"/><path class="ml9xssolm"/></g>`,
		"fallback": "keyline-icons:bar-chart-down-two-tone",
	});
}

export default Component;
