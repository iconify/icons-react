import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/szd-w8b0n.css';
import '../../css/k/kimwpj-rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="szd-w8b0n wm-k"/><path class="kimwpj-rz wm-a"/></g>`,
		"fallback": "withicons:crown-gloss",
	});
}

export default Component;
