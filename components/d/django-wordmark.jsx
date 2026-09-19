import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zonfagdaq.css';
import '../../css/l/l4bkd6ycw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zonfagdaq"/><path class="l4bkd6ycw"/></g>`,
		"fallback": "devicon-plain:django-wordmark",
	});
}

export default Component;
