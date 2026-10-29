import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xj-07jblj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/nko2m3b8f.css';
import '../../css/x/x2uudub6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xj-07jblj"/><path class="o7-ag87sb wm-deco"/><path class="nko2m3b8f wm-k"/><path class="wm-a x2uudub6d"/></g>`,
		"fallback": "withicons:basketball-blueprint",
	});
}

export default Component;
