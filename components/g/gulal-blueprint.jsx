import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qkol1eb1x.css';
import '../../css/s/sp5333bfs.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/jk6f2obya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qkol1eb1x wm-deco"/><path class="sp5333bfs wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="jk6f2obya"/></g>`,
		"fallback": "withicons:gulal-blueprint",
	});
}

export default Component;
