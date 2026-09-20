import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/s02mpq15m.css';
import '../../css/a/a3jsxkbrz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="s02mpq15m"/><path class="a3jsxkbrz"/></g>`,
		"fallback": "marketeq:canned-food-2",
	});
}

export default Component;
