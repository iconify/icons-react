import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/a/arie_qxgr.css';
import '../../css/o/ohl94g1et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="arie_qxgr"/><path class="ohl94g1et"/></g>`,
		"fallback": "tabler:cash-code",
	});
}

export default Component;
