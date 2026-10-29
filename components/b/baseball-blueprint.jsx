import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qcr8j5wyz.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/nko2m3b8f.css';
import '../../css/k/k3tex3kws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qcr8j5wyz wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="nko2m3b8f wm-k"/><path class="k3tex3kws wm-a"/></g>`,
		"fallback": "withicons:baseball-blueprint",
	});
}

export default Component;
