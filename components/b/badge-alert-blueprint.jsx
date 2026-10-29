import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j7gwv8bmj.css';
import '../../css/v/v-09a-beq.css';
import '../../css/j/jqr8ne24y.css';
import '../../css/i/i9rgmobgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="j7gwv8bmj wm-deco"/><path class="v-09a-beq wm-deco"/><path class="jqr8ne24y wm-k"/><path class="i9rgmobgb wm-a"/></g>`,
		"fallback": "withicons:badge-alert-blueprint",
	});
}

export default Component;
