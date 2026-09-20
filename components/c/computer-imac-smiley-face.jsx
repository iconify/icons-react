import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7qb4hneu.css';
import '../../css/e/edsv-ybyq.css';
import '../../css/d/dd035uesk.css';
import '../../css/h/h5iwzijlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7qb4hneu"/><path class="edsv-ybyq"/><path class="dd035uesk"/><path class="h5iwzijlj"/></g>`,
		"fallback": "streamline-cyber-color:computer-imac-smiley-face",
	});
}

export default Component;
