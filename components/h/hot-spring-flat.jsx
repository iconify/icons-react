import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-pdklb8p.css';
import '../../css/e/edqbqfb3b.css';
import '../../css/d/db90vmbne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e-pdklb8p"/><path clip-rule="evenodd" class="edqbqfb3b"/><path clip-rule="evenodd" class="db90vmbne"/></g>`,
		"fallback": "streamline-plump-color:hot-spring-flat",
	});
}

export default Component;
