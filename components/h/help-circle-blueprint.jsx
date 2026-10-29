import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/avbt0bczj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/nko2m3b8f.css';
import '../../css/k/kz-cxs77e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="avbt0bczj wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="nko2m3b8f wm-k"/><path class="kz-cxs77e wm-a"/></g>`,
		"fallback": "withicons:help-circle-blueprint",
	});
}

export default Component;
