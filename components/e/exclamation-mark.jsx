import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfpv95brl.css';
import '../../css/z/z6ljh5b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="pfpv95brl"/><path class="z6ljh5b1r"/></g>`,
		"fallback": "proicons:exclamation-mark",
	});
}

export default Component;
