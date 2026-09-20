import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjrqtwk2v.css';
import '../../css/c/cs5wq_l0e.css';
import '../../css/a/aan5-q78p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jjrqtwk2v"/><path class="cs5wq_l0e"/><path class="aan5-q78p"/></g>`,
		"fallback": "streamline-plump-color:cheese-flat",
	});
}

export default Component;
