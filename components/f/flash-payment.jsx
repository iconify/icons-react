import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/q/qe6ha-ylc.css';
import '../../css/c/czf_y_qzk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="qe6ha-ylc"/><path class="czf_y_qzk"/></g>`,
		"fallback": "icon-park:flash-payment",
	});
}

export default Component;
