import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/r347i5b-g.css';
import '../../css/a/aia8iswev.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="r347i5b-g"/><path class="aia8iswev"/></g>`,
		"fallback": "marketeq:avocado",
	});
}

export default Component;
