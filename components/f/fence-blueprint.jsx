import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qhtoyywdr.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/c/cclrk4bzu.css';
import '../../css/m/mexbxv5go.css';
import '../../css/a/a-yn74bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qhtoyywdr wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="cclrk4bzu wm-k"/><path class="mexbxv5go wm-a"/><path class="a-yn74bud wm-k"/></g>`,
		"fallback": "withicons:fence-blueprint",
	});
}

export default Component;
