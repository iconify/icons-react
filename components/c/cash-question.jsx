import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/h/huxr3617m.css';
import '../../css/d/d2474ybeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="huxr3617m"/><path class="d2474ybeb"/></g>`,
		"fallback": "tabler:cash-question",
	});
}

export default Component;
