import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jbc13cctw.css';
import '../../css/d/d2zx5ac3u.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/v/vjq2cpb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jbc13cctw"/><path class="d2zx5ac3u wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="vjq2cpb8i wm-a"/></g>`,
		"fallback": "withicons-kawaii:globe",
	});
}

export default Component;
