import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hragprjdg.css';
import '../../css/c/c8z670sxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hragprjdg"/><path class="c8z670sxz"/></g>`,
		"fallback": "streamline-freehand-color:board-game-dice-pawn",
	});
}

export default Component;
