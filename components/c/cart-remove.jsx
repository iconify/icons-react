import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d0koy98sj.css';
import '../../css/r/rqube8b6r.css';
import '../../css/j/jin0lkpdv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="d0koy98sj"/><path class="rqube8b6r"/><path class="jin0lkpdv"/></g>`,
		"fallback": "marketeq:cart-remove",
	});
}

export default Component;
