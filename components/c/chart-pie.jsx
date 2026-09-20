import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bt40fbrtz.css';
import '../../css/l/l9_31nbmy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="bt40fbrtz"/><path class="l9_31nbmy"/></g>`,
		"fallback": "marketeq:chart-pie",
	});
}

export default Component;
