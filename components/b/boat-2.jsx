import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yro32ohum.css';
import '../../css/g/ggpr0g_xj.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="yro32ohum"/><path class="ggpr0g_xj"/></g>`,
		"fallback": "marketeq:boat-2",
	});
}

export default Component;
