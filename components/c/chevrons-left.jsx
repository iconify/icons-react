import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qiv7xacvb.css';
import '../../css/p/pqbm_hs5r.css';
import '../../css/r/r2ernklhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qiv7xacvb wm-k"/><path class="pqbm_hs5r wm-a"/><path class="r2ernklhv wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chevrons-left",
	});
}

export default Component;
