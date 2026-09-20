import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvk9dqekr.css';
import '../../css/j/js0xykbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qvk9dqekr"/><path class="js0xykbod"/></g>`,
		"fallback": "lets-icons:color-mode-light",
	});
}

export default Component;
