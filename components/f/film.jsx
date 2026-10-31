import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/m/m6c1liw-r.css';
import '../../css/o/o1cvhcccz.css';
import '../../css/h/hqyhicczn.css';
import '../../css/r/rcusoqb8x.css';
import '../../css/n/nt7od5b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="m6c1liw-r"/><path class="o1cvhcccz"/><path class="hqyhicczn"/><path class="rcusoqb8x"/><path class="nt7od5b8o"/></g>`,
		"fallback": "withicons-retro:film",
	});
}

export default Component;
