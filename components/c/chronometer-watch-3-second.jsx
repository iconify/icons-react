import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/n2vlmi1qg.css';
import '../../css/o/oe1uqvb_c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="n2vlmi1qg"/><path class="oe1uqvb_c"/></g>`,
		"fallback": "marketeq:chronometer-watch-3-second",
	});
}

export default Component;
