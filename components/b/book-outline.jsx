import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/igsunmbzv.css';
import '../../css/a/a9fj4vpqc.css';
import '../../css/u/u1026qbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="igsunmbzv"/><path class="a9fj4vpqc"/><path clip-rule="evenodd" class="u1026qbii"/></g>`,
		"fallback": "solar:book-outline",
	});
}

export default Component;
