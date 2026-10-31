import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jk2fhbb9j.css';
import '../../css/b/bix8_73zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jk2fhbb9j wm-k"/><path class="bix8_73zd wm-a"/></g>`,
		"fallback": "withicons:cloud-moon-gloss",
	});
}

export default Component;
