import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k7tjc_bez.css';
import '../../css/m/mx6q5eb8b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k7tjc_bez"/><path class="mx6q5eb8b"/></g>`,
		"fallback": "bi:building-fill-lock",
	});
}

export default Component;
