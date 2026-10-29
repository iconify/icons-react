import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ora4y3bhp.css';
import '../../css/h/hs4_ud5md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ora4y3bhp"/><path class="hs4_ud5md wm-a"/></g>`,
		"fallback": "withicons:folders-solid",
	});
}

export default Component;
