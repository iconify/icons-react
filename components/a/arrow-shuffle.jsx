import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qv1ez0bwx.css';
import '../../css/w/wts2hr0yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qv1ez0bwx"/><path class="wts2hr0yq"/></g>`,
		"fallback": "akar-icons:arrow-shuffle",
	});
}

export default Component;
