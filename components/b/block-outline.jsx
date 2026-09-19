import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/z-jtuebun.css';
import '../../css/z/zmsmhxb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="z-jtuebun"/><path class="zmsmhxb7h"/></g>`,
		"fallback": "bitcoin-icons:block-outline",
	});
}

export default Component;
