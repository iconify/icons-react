import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/t/t20xnac_q.css';
import '../../css/b/bh-egfbml.css';
import '../../css/z/znweuvr0t.css';
import '../../css/a/ad53w9boh.css';
import '../../css/x/xq2y15z6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="t20xnac_q"/><path class="bh-egfbml"/><path class="znweuvr0t"/><path class="ad53w9boh"/><path class="xq2y15z6z"/></g>`,
		"fallback": "withicons-retro:file-video",
	});
}

export default Component;
