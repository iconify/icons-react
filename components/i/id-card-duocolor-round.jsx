import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ieqnmm3zq.css';
import '../../css/k/kaore02sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ieqnmm3zq"/><path class="kaore02sn"/></g>`,
		"fallback": "coolicons:id-card-duocolor-round",
	});
}

export default Component;
