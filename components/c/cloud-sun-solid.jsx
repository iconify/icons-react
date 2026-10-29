import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n2ggh_brd.css';
import '../../css/y/ygmgd9d5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="n2ggh_brd"/><path class="wm-a ygmgd9d5m"/></g>`,
		"fallback": "withicons:cloud-sun-solid",
	});
}

export default Component;
