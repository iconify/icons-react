import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d0koy98sj.css';
import '../../css/e/ezq-zbdha.css';
import '../../css/p/pz2je9gos.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="d0koy98sj"/><path class="ezq-zbdha"/><path class="pz2je9gos"/></g>`,
		"fallback": "marketeq:cart-alt-1",
	});
}

export default Component;
