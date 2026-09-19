import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q090uwjry.css';
import '../../css/i/ieugd0b5m.css';
import '../../css/v/vl8-sqjuk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q090uwjry"/><path class="ieugd0b5m"/><path class="vl8-sqjuk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:broken-chain",
	});
}

export default Component;
