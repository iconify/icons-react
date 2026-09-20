import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybf6b_bce.css';
import '../../css/i/iffo62bvg.css';
import '../../css/b/b8z5cxbaq.css';
import '../../css/g/ggfgcibha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ybf6b_bce"/><path class="iffo62bvg"/><g><path class="b8z5cxbaq"/><path class="ggfgcibha"/><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="2s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 256 256; 6 256 256; -6 256 256"/></g>`,
		"fallback": "meteocons:compass",
	});
}

export default Component;
