import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/a/ajoom_9ta.css';
import '../../css/h/hz-y56nbn.css';
import '../../css/a/a-1-zpzwp.css';
import '../../css/s/s2pgaqb_e.css';
import '../../css/l/lchreqbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="ajoom_9ta"/><path class="hz-y56nbn"/><path class="a-1-zpzwp"/><path class="s2pgaqb_e"/><path class="lchreqbxz"/></g>`,
		"fallback": "withicons-retro:badge-info",
	});
}

export default Component;
