import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/htu7u4tng.css';
import '../../css/h/h8-xogl2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="htu7u4tng wm-k"/><path class="h8-xogl2u wm-a"/></g>`,
		"fallback": "withicons:chart-network-gloss",
	});
}

export default Component;
