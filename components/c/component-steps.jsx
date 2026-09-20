import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7_rb7g1j.css';
import '../../css/w/wmrwhi7jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7_rb7g1j"/><path class="wmrwhi7jy"/></g>`,
		"fallback": "tdesign:component-steps",
	});
}

export default Component;
