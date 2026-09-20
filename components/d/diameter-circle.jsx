import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q0ji0ybmf.css';
import '../../css/u/uf0xpq39d.css';
import '../../css/a/a4lo4k5_r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="q0ji0ybmf"/><path class="uf0xpq39d"/><path class="a4lo4k5_r"/></g>`,
		"fallback": "marketeq:diameter-circle",
	});
}

export default Component;
