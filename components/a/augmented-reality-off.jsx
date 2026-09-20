import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w9uzbjoyh.css';
import '../../css/k/ksybjzbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w9uzbjoyh"/><path class="ksybjzbke"/></g>`,
		"fallback": "tabler:augmented-reality-off",
	});
}

export default Component;
