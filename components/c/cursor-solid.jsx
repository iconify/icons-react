import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iqlo_ibik.css';
import '../../css/j/j1jlc9a7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="iqlo_ibik"/><path class="j1jlc9a7v wm-a"/></g>`,
		"fallback": "withicons:cursor-solid",
	});
}

export default Component;
