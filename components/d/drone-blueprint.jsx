import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s-xqkdb4c.css';
import '../../css/h/hp7pw7bcp.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/h/hpmsss4bu.css';
import '../../css/s/skk29hbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s-xqkdb4c wm-deco"/><path class="hp7pw7bcp wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="hpmsss4bu wm-k"/><path class="skk29hbed wm-a"/></g>`,
		"fallback": "withicons:drone-blueprint",
	});
}

export default Component;
