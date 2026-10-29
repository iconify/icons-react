import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ib2trhlaw.css';
import '../../css/y/yft8yjb6z.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/z/z_q0hqb-j.css';
import '../../css/e/eze2g4blz.css';
import '../../css/o/oabxo120t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ib2trhlaw wm-deco"/><path class="wm-deco yft8yjb6z"/><path class="o7-ag87sb wm-deco"/><path class="wm-k z_q0hqb-j"/><path class="eze2g4blz wm-a"/><path class="oabxo120t wm-a"/></g>`,
		"fallback": "withicons:helicopter-blueprint",
	});
}

export default Component;
