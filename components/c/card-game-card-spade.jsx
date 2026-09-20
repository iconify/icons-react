import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hztioccen.css';
import '../../css/r/rsxrr07th.css';
import '../../css/a/amzcxkbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hztioccen"/><path class="rsxrr07th"/><path clip-rule="evenodd" class="amzcxkbhq"/></g>`,
		"fallback": "streamline-freehand-color:card-game-card-spade",
	});
}

export default Component;
