import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ge2t0abar.css';
import '../../css/l/li-pl9mqm.css';
import '../../css/p/p1p14xggr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ge2t0abar"/><path class="li-pl9mqm"/><path class="p1p14xggr"/></g>`,
		"fallback": "tabler:flip-flops",
	});
}

export default Component;
