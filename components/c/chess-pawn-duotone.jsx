import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ybv23e0vt.css';
import '../../css/l/latvxvbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ybv23e0vt"/><path class="latvxvbxi"/></g>`,
		"fallback": "lucide-extended:chess-pawn-duotone",
	});
}

export default Component;
