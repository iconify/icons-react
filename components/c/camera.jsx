import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/i/i1xnm1bcu.css';
import '../../css/k/ktu665dou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="i1xnm1bcu"/><path class="ktu665dou"/></g>`,
		"fallback": "humbleicons:camera",
	});
}

export default Component;
