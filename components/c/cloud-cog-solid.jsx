import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ejy040b1q.css';
import '../../css/a/ae40xo21y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ejy040b1q"/><path class="ae40xo21y wm-s"/></g>`,
		"fallback": "withicons:cloud-cog-solid",
	});
}

export default Component;
