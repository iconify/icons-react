import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/npwut2wzw.css';
import '../../css/d/d45l1ubbl.css';
import '../../css/h/h47nhk99c.css';
import '../../css/f/fsmp9_12h.css';
import '../../css/o/o3tab8buq.css';
import '../../css/k/ko165zwes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="npwut2wzw wm-shadow"/><path class="d45l1ubbl"/><path class="h47nhk99c"/><path class="fsmp9_12h"/><path class="o3tab8buq"/><path class="ko165zwes"/></g>`,
		"fallback": "withicons-retro:alarm-clock",
	});
}

export default Component;
