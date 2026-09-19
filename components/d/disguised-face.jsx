import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tzt2nzblv.css';
import '../../css/g/gmgv6en4i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tzt2nzblv"/><path class="gmgv6en4i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:disguised-face",
	});
}

export default Component;
