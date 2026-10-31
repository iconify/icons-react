import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8p_zgbdp.css';
import '../../css/l/lj_kdlfqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c8p_zgbdp"/><path class="lj_kdlfqy"/></g>`,
		"fallback": "coolicons:cloud-sync-corner-bulk-round",
	});
}

export default Component;
