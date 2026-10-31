import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g09vubc4j.css';
import '../../css/z/zf4bhsw8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g09vubc4j wm-k"/><path class="wm-a zf4bhsw8o"/></g>`,
		"fallback": "withicons:coins-gloss",
	});
}

export default Component;
