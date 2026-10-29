import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j4q2u44ul.css';
import '../../css/l/lbaudn5kj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/np-l-tbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="j4q2u44ul wm-deco"/><path class="lbaudn5kj wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="np-l-tbyw"/></g>`,
		"fallback": "withicons:cooking-pot-blueprint",
	});
}

export default Component;
