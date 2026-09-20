import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/avntskb1y.css';
import '../../css/g/gswougl7d.css';
import '../../css/h/hdzipz46a.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/z/zfge7hb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="avntskb1y"/><path class="gswougl7d"/><path class="hdzipz46a"/><path class="pq5xj2bli"/><path class="zfge7hb-h"/></g>`,
		"fallback": "solar:dropper-minimalistic-2-linear",
	});
}

export default Component;
