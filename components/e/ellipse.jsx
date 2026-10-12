import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2-mnxbvo.css';
import '../../css/n/n6cewtbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="g2-mnxbvo"/><ellipse class="n6cewtbue"/></g>`,
		"fallback": "andrsrxn:ellipse",
	});
}

export default Component;
