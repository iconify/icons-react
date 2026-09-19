import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x556spblw.css';
import '../../css/k/ko8awcmas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x556spblw"/><path class="ko8awcmas"/></g>`,
		"fallback": "healthicons:cochlear-implant",
	});
}

export default Component;
