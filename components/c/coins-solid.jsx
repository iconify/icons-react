import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k263oypbg.css';
import '../../css/w/wiz-2rbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k263oypbg"/><path class="wiz-2rbyk wm-a"/></g>`,
		"fallback": "withicons:coins-solid",
	});
}

export default Component;
