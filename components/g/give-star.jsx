import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8oj0cteq.css';
import '../../css/g/g94364l3y.css';
import '../../css/g/gvh8f9bgq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8oj0cteq"/><path class="g94364l3y"/><path class="gvh8f9bgq"/></g>`,
		"fallback": "streamline-flex-color:give-star",
	});
}

export default Component;
