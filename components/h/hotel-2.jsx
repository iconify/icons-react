import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e-aq4gbtp.css';
import '../../css/s/s6_o8gbkt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="e-aq4gbtp"/><path class="s6_o8gbkt"/></g>`,
		"fallback": "marketeq:hotel-2",
	});
}

export default Component;
