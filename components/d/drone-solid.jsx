import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gpvzinbds.css';
import '../../css/p/pnhwny9ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gpvzinbds"/><path class="pnhwny9ii wm-a"/></g>`,
		"fallback": "withicons:drone-solid",
	});
}

export default Component;
