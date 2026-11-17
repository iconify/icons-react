import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bcihm804p.css';
import '../../css/w/w6qslpbjy.css';
import '../../css/y/yn38we3bp.css';
import '../../css/t/tmvfxeu1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="bcihm804p"/><path class="w6qslpbjy"/><path class="yn38we3bp"/><path class="tmvfxeu1f"/></g>`,
		"fallback": "matita:file-chart-column",
	});
}

export default Component;
