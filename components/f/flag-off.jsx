import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dtq8rbpms.css';
import '../../css/h/hev234mbp.css';
import '../../css/s/sn78srb9i.css';
import '../../css/x/xgn8g_bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dtq8rbpms wm-k"/><path class="hev234mbp"/><path class="sn78srb9i"/><path class="wm-s xgn8g_bte"/></g>`,
		"fallback": "withicons-bauhaus:flag-off",
	});
}

export default Component;
