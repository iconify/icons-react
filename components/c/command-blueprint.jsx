import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/odedu7bbc.css';
import '../../css/b/bxjv56brc.css';
import '../../css/t/t83hz6hkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="odedu7bbc wm-deco"/><path class="bxjv56brc wm-deco"/><path class="t83hz6hkm"/></g>`,
		"fallback": "withicons:command-blueprint",
	});
}

export default Component;
