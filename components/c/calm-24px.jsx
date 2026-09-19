import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-k24-qyk.css';
import '../../css/z/zx9of90ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c-k24-qyk"/><path class="zx9of90ls"/></g>`,
		"fallback": "healthicons:calm-24px",
	});
}

export default Component;
