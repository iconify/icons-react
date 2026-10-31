import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tqffmp7ti.css';
import '../../css/k/k8269ub5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tqffmp7ti"/><path class="k8269ub5t"/></g>`,
		"fallback": "coolicons:circle-dashed-close-duocolor-round",
	});
}

export default Component;
