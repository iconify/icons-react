import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/azgjlne8a.css';
import '../../css/r/ruwbbnbtn.css';
import '../../css/u/ukjvipc-p.css';
import '../../css/o/o9u4dqbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="azgjlne8a wm-deco"/><path class="ruwbbnbtn wm-deco"/><path class="ukjvipc-p wm-deco"/><path class="o9u4dqbcn"/></g>`,
		"fallback": "withicons:globe-lock-blueprint",
	});
}

export default Component;
