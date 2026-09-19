import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/djrh81b_g.css';
import '../../css/d/de1yf9b_m.css';
import '../../css/f/fw02rxb_s.css';
import '../../css/e/eedmhxbrq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="djrh81b_g"/><path clip-rule="evenodd" class="de1yf9b_m"/><path clip-rule="evenodd" class="fw02rxb_s"/><path clip-rule="evenodd" class="eedmhxbrq"/></g>`,
		"fallback": "healthicons:cancerous-cell-nuclei-outline",
	});
}

export default Component;
