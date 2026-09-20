import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h22g7_bfe.css';
import '../../css/h/hus16pvob.css';
import '../../css/s/sd60occll.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="h22g7_bfe"/><path class="hus16pvob"/><path class="sd60occll"/></g>`,
		"fallback": "marketeq:gas-stove",
	});
}

export default Component;
