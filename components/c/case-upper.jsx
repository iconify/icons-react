import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wy87--d7y.css';
import '../../css/l/lsrqcbj0u.css';
import '../../css/v/vf4v90byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k wy87--d7y"/><path class="lsrqcbj0u wm-a"/><path class="vf4v90byg wm-deco"/></g>`,
		"fallback": "withicons-kawaii:case-upper",
	});
}

export default Component;
