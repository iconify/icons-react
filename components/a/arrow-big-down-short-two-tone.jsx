import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n03itsb0r.css';
import '../../css/k/krgpyebuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n03itsb0r"/><path class="krgpyebuh"/></g>`,
		"fallback": "keyline-icons:arrow-big-down-short-two-tone",
	});
}

export default Component;
