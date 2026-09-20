import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h_3sjsb4f.css';
import '../../css/n/n9_wpcd_e.css';
import '../../css/y/yjfg1wbnr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="h_3sjsb4f"/><path class="n9_wpcd_e"/><path class="yjfg1wbnr"/></g>`,
		"fallback": "marketeq:debit-purchase",
	});
}

export default Component;
