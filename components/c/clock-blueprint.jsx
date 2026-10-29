import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c39wt4p0k.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/nko2m3b8f.css';
import '../../css/f/f78e21b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="c39wt4p0k wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="nko2m3b8f wm-k"/><path class="f78e21b0t wm-a"/></g>`,
		"fallback": "withicons:clock-blueprint",
	});
}

export default Component;
