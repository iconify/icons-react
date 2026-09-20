import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u4x2a8b0d.css';
import '../../css/s/sbq63mboe.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="u4x2a8b0d"/><path class="sbq63mboe"/></g>`,
		"fallback": "marketeq:film-roll",
	});
}

export default Component;
