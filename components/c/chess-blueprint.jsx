import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/htdq6cc4t.css';
import '../../css/o/oaeosk-ai.css';
import '../../css/g/gfhi6c-ut.css';
import '../../css/t/tfxmz8b0m.css';
import '../../css/x/xck8kdj3v.css';
import '../../css/l/lkodhclgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="htdq6cc4t wm-deco"/><path class="oaeosk-ai wm-deco"/><path class="gfhi6c-ut wm-deco"/><path class="tfxmz8b0m wm-k"/><path class="wm-a xck8kdj3v"/><path class="lkodhclgb wm-k"/></g>`,
		"fallback": "withicons:chess-blueprint",
	});
}

export default Component;
