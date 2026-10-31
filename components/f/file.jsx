import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/r/ruc-ryb6n.css';
import '../../css/y/ynhokbbkv.css';
import '../../css/t/tej44k3ii.css';
import '../../css/m/mhz3m8b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="ruc-ryb6n"/><path class="ynhokbbkv"/><path class="tej44k3ii"/><path class="mhz3m8b7r"/></g>`,
		"fallback": "withicons-retro:file",
	});
}

export default Component;
