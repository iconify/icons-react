import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sswueyb5k.css';
import '../../css/d/dskj_v-8n.css';
import '../../css/g/g1wy37vpl.css';
import '../../css/e/emma5uf1l.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sswueyb5k"/><path class="dskj_v-8n wm-shine"/><path class="g1wy37vpl wm-k"/><path class="emma5uf1l wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:baby",
	});
}

export default Component;
