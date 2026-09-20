import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q7ot8ryau.css';
import '../../css/o/oeb9303bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q7ot8ryau"/><path class="oeb9303bc"/></g>`,
		"fallback": "keyline-icons:arrow-down-wide-narrow-two-tone",
	});
}

export default Component;
