import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mx878-b0u.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/g/gmt-k0r6b.css';
import '../../css/p/pzj6afbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mx878-b0u wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="gmt-k0r6b wm-k"/><path class="pzj6afbau wm-a"/></g>`,
		"fallback": "withicons:cpu-blueprint",
	});
}

export default Component;
