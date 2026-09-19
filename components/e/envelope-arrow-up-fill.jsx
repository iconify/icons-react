import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rzamidcak.css';
import '../../css/w/w6kfh4bbj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rzamidcak"/><path class="w6kfh4bbj"/></g>`,
		"fallback": "bi:envelope-arrow-up-fill",
	});
}

export default Component;
