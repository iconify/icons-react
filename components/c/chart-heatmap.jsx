import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptb8pdydy.css';
import '../../css/r/r8yr8n28h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptb8pdydy"/><path class="r8yr8n28h"/></g>`,
		"fallback": "andrsrxn:chart-heatmap",
	});
}

export default Component;
