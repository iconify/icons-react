import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/w47ikkpzb.css';
import '../../css/i/ibzywrb8q.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="w47ikkpzb"/><path class="ibzywrb8q"/></g>`,
		"fallback": "marketeq:down-octagon",
	});
}

export default Component;
