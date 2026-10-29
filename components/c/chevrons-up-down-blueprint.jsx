import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cgssfdcel.css';
import '../../css/d/dlb4_kl3b.css';
import '../../css/x/xj9-8y3fv.css';
import '../../css/p/phmwp8b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cgssfdcel wm-deco"/><path class="dlb4_kl3b wm-deco"/><path class="xj9-8y3fv"/><path class="phmwp8b9d"/></g>`,
		"fallback": "withicons:chevrons-up-down-blueprint",
	});
}

export default Component;
