import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ox4vw9b1w.css';
import '../../css/p/pxwolccgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ox4vw9b1w"/><path class="pxwolccgm"/></g>`,
		"fallback": "keyline-icons:arrow-in-down-right-dashed-panel-two-tone",
	});
}

export default Component;
