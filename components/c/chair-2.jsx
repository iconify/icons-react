import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/uo62rpbsv.css';
import '../../css/o/o8mslebsm.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="uo62rpbsv"/><path class="o8mslebsm"/></g>`,
		"fallback": "marketeq:chair-2",
	});
}

export default Component;
