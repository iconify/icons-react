import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uir53gb_j.css';
import '../../css/j/j42q9abhz.css';
import '../../css/u/uar3oh8nv.css';
import '../../css/i/imvehtogg.css';
import '../../css/u/u3_2lubik.css';
import '../../css/r/rmvy7ebzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uir53gb_j wm-shadow"/><path class="j42q9abhz"/><path class="uar3oh8nv"/><path class="imvehtogg"/><path class="u3_2lubik"/><path class="rmvy7ebzp"/></g>`,
		"fallback": "withicons-retro:gallery-horizontal",
	});
}

export default Component;
