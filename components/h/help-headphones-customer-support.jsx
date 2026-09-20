import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smejc0biy.css';
import '../../css/b/b-xn-5bdz.css';
import '../../css/q/q633_jb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="smejc0biy"/><path class="b-xn-5bdz"/><path class="q633_jb8m"/></g>`,
		"fallback": "streamline-freehand:help-headphones-customer-support",
	});
}

export default Component;
