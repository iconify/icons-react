import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/be6zp5bxo.css';
import '../../css/k/k3_ezyb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="be6zp5bxo wm-k"/><path class="k3_ezyb6z wm-a"/></g>`,
		"fallback": "withicons:chinese-knot-gloss",
	});
}

export default Component;
