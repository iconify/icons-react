import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rufw8g92g.css';
import '../../css/k/kiisrxjzg.css';
import '../../css/z/z786-lb_a.css';
import '../../css/u/u0rcsj7uo.css';
import '../../css/e/eonvsfbbv.css';
import '../../css/v/v7y0ntben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rufw8g92g wm-shadow"/><path class="kiisrxjzg"/><path class="z786-lb_a"/><path class="u0rcsj7uo"/><path class="eonvsfbbv"/><path class="v7y0ntben"/></g>`,
		"fallback": "withicons-retro:brain",
	});
}

export default Component;
