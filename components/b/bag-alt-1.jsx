import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/p7souxn-q.css';
import '../../css/k/krljh2b0z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="p7souxn-q"/><path class="krljh2b0z"/></g>`,
		"fallback": "marketeq:bag-alt-1",
	});
}

export default Component;
