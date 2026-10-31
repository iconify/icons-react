import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k_lo46bdk.css';
import '../../css/u/uyvh0hlos.css';
import '../../css/s/sfs__-7_f.css';
import '../../css/d/d1up9g-eu.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="k_lo46bdk"/><path class="uyvh0hlos wm-shine"/><path class="sfs__-7_f wm-k"/><path class="d1up9g-eu wm-a"/><path class="wb3c7x6fa wm-deco"/></g>`,
		"fallback": "withicons-kawaii:hammer",
	});
}

export default Component;
