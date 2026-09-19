import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rzamidcak.css';
import '../../css/w/wi3k8x65i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rzamidcak"/><path class="wi3k8x65i"/></g>`,
		"fallback": "bi:envelope-arrow-down-fill",
	});
}

export default Component;
