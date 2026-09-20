import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lx1vc0dtu.css';
import '../../css/h/hr6o0obsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lx1vc0dtu"/><path class="hr6o0obsw"/></g>`,
		"fallback": "solar:cosmetic-outline",
	});
}

export default Component;
