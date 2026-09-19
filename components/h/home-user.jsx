import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q30_42vkc.css';
import '../../css/d/dubamxw4b.css';
import '../../css/p/pfa780btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q30_42vkc"/><path class="dubamxw4b"/><path class="pfa780btb"/></g>`,
		"fallback": "iconoir:home-user",
	});
}

export default Component;
