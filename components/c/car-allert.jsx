import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kgxtwcbob.css';
import '../../css/l/l_e49jaqo.css';
import '../../css/d/d0metmbgq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="kgxtwcbob"/><path class="l_e49jaqo"/><path class="d0metmbgq"/></g>`,
		"fallback": "marketeq:car-allert",
	});
}

export default Component;
