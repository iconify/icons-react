import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-wf-ib2y.css';
import '../../css/j/jc6w6-bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a-wf-ib2y"/><rect transform="matrix(-1 0 0 1 15 5.5)" class="jc6w6-bos"/></g>`,
		"fallback": "proicons:center-horizontal",
	});
}

export default Component;
