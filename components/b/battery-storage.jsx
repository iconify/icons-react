import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cax-wgxpq.css';
import '../../css/i/i83qznx_e.css';
import '../../css/o/oan10_ztq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="cax-wgxpq"/><path class="i83qznx_e"/><path class="oan10_ztq"/></g>`,
		"fallback": "icon-park-outline:battery-storage",
	});
}

export default Component;
