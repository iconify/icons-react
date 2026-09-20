import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cs_k-wbnb.css';
import '../../css/m/m5nommbhz.css';
import '../../css/i/ia2l_ubbl.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="cs_k-wbnb"/><path class="m5nommbhz"/><path class="ia2l_ubbl"/></g>`,
		"fallback": "marketeq:bench-press",
	});
}

export default Component;
