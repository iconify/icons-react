import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cmc9imbbd.css';
import '../../css/f/fl3m636-p.css';
import '../../css/u/umrdc7dxj.css';
import '../../css/b/bm9xalosn.css';
import '../../css/j/j46hw3bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cmc9imbbd wm-shadow"/><path class="fl3m636-p"/><path class="umrdc7dxj"/><path class="bm9xalosn"/><path class="j46hw3bto"/></g>`,
		"fallback": "withicons-retro:flag",
	});
}

export default Component;
