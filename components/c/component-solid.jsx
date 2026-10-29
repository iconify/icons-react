import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zf598_bkq.css';
import '../../css/p/p5ky9pb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zf598_bkq"/><path class="p5ky9pb5b wm-a"/></g>`,
		"fallback": "withicons:component-solid",
	});
}

export default Component;
