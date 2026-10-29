import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pxj59qbfe.css';
import '../../css/a/a7kk27yxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pxj59qbfe"/><path class="a7kk27yxl wm-a"/></g>`,
		"fallback": "withicons:avatar-boy-solid",
	});
}

export default Component;
