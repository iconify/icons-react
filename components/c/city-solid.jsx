import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddz6n_bzu.css';
import '../../css/h/hpk2-vezq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ddz6n_bzu"/><path class="hpk2-vezq"/></g>`,
		"fallback": "iconaut:city-solid",
	});
}

export default Component;
