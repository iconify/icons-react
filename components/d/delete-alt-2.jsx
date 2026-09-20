import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jhiz4hztw.css';
import '../../css/p/priy_abib.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jhiz4hztw"/><path class="priy_abib"/></g>`,
		"fallback": "marketeq:delete-alt-2",
	});
}

export default Component;
