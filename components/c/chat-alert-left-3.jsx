import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/io9yp4byx.css';
import '../../css/l/l_bdbebhx.css';
import '../../css/g/g7pln_tin.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="io9yp4byx"/><path class="l_bdbebhx"/><path class="g7pln_tin"/></g>`,
		"fallback": "marketeq:chat-alert-left-3",
	});
}

export default Component;
