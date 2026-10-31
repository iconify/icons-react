import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sftki1bda.css';
import '../../css/m/m20uhxhne.css';
import '../../css/r/rfwzl-bvm.css';
import '../../css/l/l1p6gsbby.css';
import '../../css/v/vqibptbhh.css';
import '../../css/d/dhqfigb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sftki1bda wm-shadow"/><path class="m20uhxhne"/><path class="rfwzl-bvm"/><path class="l1p6gsbby"/><path class="vqibptbhh"/><path class="dhqfigb1f"/></g>`,
		"fallback": "withicons-retro:glass-water",
	});
}

export default Component;
