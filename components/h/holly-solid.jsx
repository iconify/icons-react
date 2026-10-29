import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bmymgfb5v.css';
import '../../css/q/q92fwbciu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bmymgfb5v"/><path class="q92fwbciu wm-a"/></g>`,
		"fallback": "withicons:holly-solid",
	});
}

export default Component;
