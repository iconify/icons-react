import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nz26n1b5p.css';
import '../../css/g/g1z6mk3_x.css';
import '../../css/c/cw3fst3sg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nz26n1b5p"/><path class="g1z6mk3_x"/><path class="cw3fst3sg"/></g>`,
		"fallback": "pepicons-pencil:eye-frame",
	});
}

export default Component;
