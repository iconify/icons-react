import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qwc1_7mvg.css';
import '../../css/g/g2soqfnmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qwc1_7mvg"/><path class="g2soqfnmd"/></g>`,
		"fallback": "tabler:analyze-off",
	});
}

export default Component;
