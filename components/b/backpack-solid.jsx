import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rl5cmobjw.css';
import '../../css/y/yy6l7nb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rl5cmobjw"/><path class="wm-a yy6l7nb7b"/></g>`,
		"fallback": "withicons:backpack-solid",
	});
}

export default Component;
