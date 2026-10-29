import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i0lc1ab1a.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/nko2m3b8f.css';
import '../../css/h/h-w46eb9h.css';
import '../../css/t/tfiky1b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="i0lc1ab1a wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="nko2m3b8f wm-k"/><path class="h-w46eb9h wm-a"/><path class="tfiky1b5f wm-a"/></g>`,
		"fallback": "withicons:contrast-blueprint",
	});
}

export default Component;
