import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r2e_wsbfc.css';
import '../../css/o/o8rmnfbho.css';
import '../../css/z/zmwrmw2dd.css';
import '../../css/z/zpxyp1zit.css';
import '../../css/s/s_s701glh.css';
import '../../css/e/ewfbchzfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r2e_wsbfc wm-shadow"/><path class="o8rmnfbho"/><path class="zmwrmw2dd"/><path class="zpxyp1zit"/><path class="s_s701glh"/><path class="ewfbchzfc"/></g>`,
		"fallback": "withicons-retro:avatar-dino",
	});
}

export default Component;
