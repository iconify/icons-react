import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/elfrgac3u.css';
import '../../css/k/k_gl5ezcg.css';
import '../../css/w/wl7l9ybsl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="elfrgac3u"/><path class="k_gl5ezcg"/><path class="wl7l9ybsl"/></g>`,
		"fallback": "streamline-color:bag",
	});
}

export default Component;
