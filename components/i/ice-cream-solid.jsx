import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/emow9320l.css';
import '../../css/m/m762r1b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="emow9320l"/><path class="m762r1b-v wm-a"/></g>`,
		"fallback": "withicons:ice-cream-solid",
	});
}

export default Component;
