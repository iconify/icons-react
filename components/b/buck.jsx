import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iveanybiz.css';
import '../../css/p/p-qjc1xpf.css';
import '../../css/l/ljxetke2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="iveanybiz"><path class="p-qjc1xpf"/><path class="ljxetke2b"/></g>`,
		"fallback": "material-icon-theme:buck",
	});
}

export default Component;
