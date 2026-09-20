import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/u/ugo7ibb4g.css';
import '../../css/k/k90cx0pjv.css';
import '../../css/h/hk5otozqs.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><path class="ugo7ibb4g"/><path class="k90cx0pjv"/><path class="hk5otozqs"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-chart-2-line-duotone",
	});
}

export default Component;
