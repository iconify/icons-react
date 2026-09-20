import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v17fuccch.css';
import '../../css/f/fb4bdwb3d.css';
import '../../css/k/kvb400b5w.css';
import '../../css/k/kitorfb4h.css';
import '../../css/t/tu9q2gybi.css';
import '../../css/k/k6x1q5l9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v17fuccch"/><path class="fb4bdwb3d"/><path class="kvb400b5w"/><path class="kitorfb4h"/><path class="tu9q2gybi"/><path class="k6x1q5l9b"/></g>`,
		"fallback": "solar:gps-bold-duotone",
	});
}

export default Component;
