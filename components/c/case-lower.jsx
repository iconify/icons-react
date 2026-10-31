import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pzgy2ibzo.css';
import '../../css/i/i9jm-20sb.css';
import '../../css/i/izvhglblk.css';
import '../../css/r/rnnmp6upq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pzgy2ibzo wm-shadow"/><path class="i9jm-20sb wm-shadow"/><path class="izvhglblk"/><path class="rnnmp6upq"/></g>`,
		"fallback": "withicons-brutal:case-lower",
	});
}

export default Component;
