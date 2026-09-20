import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mewv4bb2k.css';
import '../../css/z/z1jqxcydo.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="mewv4bb2k"/><path class="z1jqxcydo"/></g>`,
		"fallback": "marketeq:cashier-machine-left",
	});
}

export default Component;
