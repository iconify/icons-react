import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/q/qdq86obzt.css';
import '../../css/f/fn2z64rpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path class="qdq86obzt"/><path class="fn2z64rpg"/></g>`,
		"fallback": "lucide-extended:columns-2-duotone",
	});
}

export default Component;
