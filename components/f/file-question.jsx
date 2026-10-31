import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/k/kvd_5xbtu.css';
import '../../css/a/ad5mbrb2l.css';
import '../../css/p/pylthn_wp.css';
import '../../css/a/aep5ismwv.css';
import '../../css/a/aq07l9izx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="kvd_5xbtu"/><path class="ad5mbrb2l"/><path class="pylthn_wp"/><path class="aep5ismwv"/><path class="aq07l9izx"/></g>`,
		"fallback": "withicons-retro:file-question",
	});
}

export default Component;
