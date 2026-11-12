import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/s/sdfr7rb6z.css';
import '../../css/m/mslug-75j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="sdfr7rb6z"/><path class="mslug-75j"/></g>`,
		"fallback": "tabler:cash-cancel",
	});
}

export default Component;
