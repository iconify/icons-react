import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/t/tbl4j-bom.css';
import '../../css/g/gnrb8ib6h.css';
import '../../css/m/mkl-hbb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="tbl4j-bom"/><path class="gnrb8ib6h"/><path class="mkl-hbb0y"/></g>`,
		"fallback": "solar:confounded-square-linear",
	});
}

export default Component;
