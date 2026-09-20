import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/u09znn34h.css';
import '../../css/p/pv4cg3-5q.css';
import '../../css/r/ra-o12qfd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="u09znn34h"/><path class="pv4cg3-5q"/><path class="ra-o12qfd"/></g>`,
		"fallback": "marketeq:add-collection",
	});
}

export default Component;
