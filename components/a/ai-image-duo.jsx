import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkro2nb4h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pyaa84bio.css';
import '../../css/r/ru_bpyzav.css';
import '../../css/c/c1-je2b0b.css';
import '../../css/h/h4_j_tb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkro2nb4h secondary"/><g class="dt0cm9dhy primary"><path class="pyaa84bio"/><path class="ru_bpyzav"/><path class="c1-je2b0b"/><path class="h4_j_tb2s"/></g>`,
		"fallback": "iconaut:ai-image-duo",
	});
}

export default Component;
