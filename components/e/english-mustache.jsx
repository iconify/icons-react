import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/q/qc_3k6byd.css';
import '../../css/j/jqt682rgl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="qc_3k6byd"/><path class="jqt682rgl"/></g>`,
		"fallback": "icon-park:english-mustache",
	});
}

export default Component;
