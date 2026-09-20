import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nj_blobin.css';
import '../../css/h/h-o21yhdy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nj_blobin"/><path class="h-o21yhdy"/></g>`,
		"fallback": "streamline-color:cloud-warning",
	});
}

export default Component;
