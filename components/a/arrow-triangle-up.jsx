import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2sry4pkn.css';
import '../../css/a/a15ckqbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2sry4pkn"/><path class="a15ckqbiz"/></g>`,
		"fallback": "tdesign:arrow-triangle-up",
	});
}

export default Component;
