import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wos5iacnk.css';
import '../../css/i/ih11kii2b.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="wos5iacnk"/><path class="ih11kii2b"/></g>`,
		"fallback": "marketeq:hastag-circle",
	});
}

export default Component;
