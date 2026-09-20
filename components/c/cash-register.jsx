import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jbuxa0enq.css';
import '../../css/a/asbvddb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jbuxa0enq"/><path class="asbvddb8h"/></g>`,
		"fallback": "tabler:cash-register",
	});
}

export default Component;
