import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g5te30-az.css';
import '../../css/k/kx5d14bvf.css';
import '../../css/e/euflb0bla.css';
import '../../css/p/pt0k9cbgs.css';
import '../../css/b/bfvhiccdv.css';
import '../../css/c/cx4uglfpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g5te30-az wm-shadow"/><path class="kx5d14bvf"/><path class="euflb0bla"/><path class="pt0k9cbgs"/><path class="bfvhiccdv"/><path class="cx4uglfpg"/></g>`,
		"fallback": "withicons-retro:gauge",
	});
}

export default Component;
