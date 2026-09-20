import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/p767wzbnu.css';
import '../../css/p/p8dw5h40g.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="p767wzbnu"/><path class="p8dw5h40g"/></g>`,
		"fallback": "marketeq:home-telephone",
	});
}

export default Component;
