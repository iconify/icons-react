import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wgyb1hv4a.css';
import '../../css/l/ljp5tloqm.css';
import '../../css/k/knf-w_g_n.css';
import '../../css/n/ngnxw66uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wgyb1hv4a"/><path class="ljp5tloqm wm-shine"/><path class="knf-w_g_n wm-k"/><path class="ngnxw66uw wm-a"/></g>`,
		"fallback": "withicons-kawaii:guitar",
	});
}

export default Component;
