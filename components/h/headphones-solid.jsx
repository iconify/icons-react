import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wofyjac-l.css';
import '../../css/m/mgg5g_bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wofyjac-l"/><path class="mgg5g_bdi wm-a"/></g>`,
		"fallback": "withicons:headphones-solid",
	});
}

export default Component;
