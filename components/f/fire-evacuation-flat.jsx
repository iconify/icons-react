import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpjy4_zoi.css';
import '../../css/l/lcegxhb1j.css';
import '../../css/f/fc6nuz8hc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zpjy4_zoi"/><path clip-rule="evenodd" class="lcegxhb1j"/><path class="fc6nuz8hc"/></g>`,
		"fallback": "streamline-plump-color:fire-evacuation-flat",
	});
}

export default Component;
