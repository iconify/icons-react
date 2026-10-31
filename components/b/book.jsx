import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuv980bjs.css';
import '../../css/y/ylcvkgb4i.css';
import '../../css/k/kfig-c0_s.css';
import '../../css/e/erxbb0a_n.css';
import '../../css/n/ngu8nfb4w.css';
import '../../css/c/comgv8bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k xuv980bjs"/><path class="wm-k ylcvkgb4i"/><path class="kfig-c0_s wm-shadow"/><path class="erxbb0a_n wm-shine"/><path class="ngu8nfb4w wm-shine"/><path class="comgv8bwc wm-shine"/></g>`,
		"fallback": "withicons-valentine:book",
	});
}

export default Component;
