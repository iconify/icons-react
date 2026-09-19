import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6apofftk.css';
import '../../css/n/nsusglb8a.css';
import '../../css/l/lca41vbdh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="s6apofftk"/><circle transform="matrix(-1 0 0 1 24 24)" class="nsusglb8a"/><path class="lca41vbdh"/></g>`,
		"fallback": "icon-park-outline:auto-focus",
	});
}

export default Component;
