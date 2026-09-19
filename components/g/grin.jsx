import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhxn6jb6r.css';
import '../../css/k/kcpkyc88v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dhxn6jb6r"/><path class="kcpkyc88v"/></g>`,
		"fallback": "cryptocurrency-color:grin",
	});
}

export default Component;
