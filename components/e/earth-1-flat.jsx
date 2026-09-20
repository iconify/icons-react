import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sf-8xspff.css';
import '../../css/r/ragpzl4ss.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sf-8xspff"/><path class="ragpzl4ss"/></g>`,
		"fallback": "streamline-plump-color:earth-1-flat",
	});
}

export default Component;
