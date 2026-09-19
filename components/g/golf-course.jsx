import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kf5psab2d.css';
import '../../css/a/a3mskbb5v.css';
import '../../css/e/ev9ek8bsc.css';
import '../../css/w/wp96mgvab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="kf5psab2d"/><circle class="a3mskbb5v"/><path class="ev9ek8bsc"/><path class="wp96mgvab"/></g>`,
		"fallback": "icon-park:golf-course",
	});
}

export default Component;
