import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l1d352bpw.css';
import '../../css/w/w77_u0byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l1d352bpw wm-k"/><path class="w77_u0byq wm-a"/></g>`,
		"fallback": "withicons:avatar-bear-gloss",
	});
}

export default Component;
