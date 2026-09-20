import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnozrgv-n.css';
import '../../css/q/qug2-ac7c.css';
import '../../css/p/p1g8vqjol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hnozrgv-n"/><path class="qug2-ac7c"/><path class="p1g8vqjol"/></g>`,
		"fallback": "tabler:brand-grindr",
	});
}

export default Component;
