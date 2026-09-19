import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rwdyu4blt.css';
import '../../css/s/skr69mb3d.css';
import '../../css/t/t-n--fb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="rwdyu4blt"/><rect class="skr69mb3d"/><rect class="t-n--fb8n"/></g>`,
		"fallback": "humbleicons:dots-horizontal",
	});
}

export default Component;
