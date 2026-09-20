import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/uzkqgxbri.css';
import '../../css/o/osmgv-8ok.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="uzkqgxbri"/><path class="osmgv-8ok"/></g>`,
		"fallback": "marketeq:filter-alt-5",
	});
}

export default Component;
