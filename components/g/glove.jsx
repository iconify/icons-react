import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygff2vbsd.css';
import '../../css/p/p3t1y3pdz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g><path class="ygff2vbsd"/><rect class="p3t1y3pdz"/><animateTransform id="SVGfY1CHcFo" additive="sum" attributeName="transform" begin="0s; x1.end+1.75s" calcMode="spline" dur="1.25s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" type="rotate" values="0 256 332; 0 256 332; -15 256 332; 15 256 332; -9 256 332; 9 256 332; -6 256 332; 3 256 332; 0 256 332"/></g>`,
		"fallback": "meteocons:glove",
	});
}

export default Component;
