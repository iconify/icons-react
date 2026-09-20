import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cdtzbvf-p.css';
import '../../css/c/ciz3rxbla.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cdtzbvf-p"/><path class="ciz3rxbla"/></g>`,
		"fallback": "marketeq:date",
	});
}

export default Component;
