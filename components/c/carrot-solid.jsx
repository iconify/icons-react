import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mz841dbnw.css';
import '../../css/z/zv9viymlh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mz841dbnw"/><path class="wm-a zv9viymlh"/></g>`,
		"fallback": "withicons:carrot-solid",
	});
}

export default Component;
