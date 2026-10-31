import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v_m4j6bbh.css';
import '../../css/j/j1nodtiig.css';
import '../../css/k/k_lneb11t.css';
import '../../css/l/l6dupo41k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v_m4j6bbh"/><path class="j1nodtiig wm-shine"/><path class="k_lneb11t wm-k"/><path class="l6dupo41k wm-a"/></g>`,
		"fallback": "withicons-kawaii:archive-restore",
	});
}

export default Component;
