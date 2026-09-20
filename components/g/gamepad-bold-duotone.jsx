import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vuge_9xgi.css';
import '../../css/p/poudgbbqb.css';
import '../../css/z/z61lhme0h.css';
import '../../css/s/s78tsabvh.css';
import '../../css/d/d55q48z4y.css';
import '../../css/e/e3x1nvb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vuge_9xgi"/><path class="poudgbbqb"/><path class="z61lhme0h"/><path class="s78tsabvh"/><path class="d55q48z4y"/><path class="e3x1nvb0a"/></g>`,
		"fallback": "solar:gamepad-bold-duotone",
	});
}

export default Component;
