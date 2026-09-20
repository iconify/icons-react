import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdf-683ve.css';
import '../../css/x/xk6lrmbjm.css';
import '../../css/l/ll2e60b-n.css';
import '../../css/e/etet9gcwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGLlWB2cAN" viewBox="0 0 359 231"><path class="wdf-683ve"/></symbol></defs><use width="359" height="231" href="#SVGLlWB2cAN" transform="translate(76.5 140.5)"/><path opacity="0" class="xk6lrmbjm"><animateTransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"/><animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"/></path><path opacity="0" class="ll2e60b-n"><animateTransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"/><animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"/></path><path opacity="0" class="etet9gcwr"><animateTransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"/><animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"/></path>`,
		"fallback": "meteocons:cloud-up",
	});
}

export default Component;
