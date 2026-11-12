import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/w/w1tmy5blf.css';
import '../../css/b/b_r18ebeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="w1tmy5blf"/><path class="b_r18ebeg"/></g>`,
		"fallback": "tabler:cash-check",
	});
}

export default Component;
