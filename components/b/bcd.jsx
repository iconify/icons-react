import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkmu5-3gj.css';
import '../../css/n/nny13jbaq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="pkmu5-3gj"/><path class="nny13jbaq"/></g>`,
		"fallback": "cryptocurrency-color:bcd",
	});
}

export default Component;
