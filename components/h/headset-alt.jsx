import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/knq9fubwy.css';
import '../../css/s/sd0mhnblc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="knq9fubwy"/><path class="sd0mhnblc"/></g>`,
		"fallback": "marketeq:headset-alt",
	});
}

export default Component;
