import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlzpjpbyh.css';
import '../../css/z/zssxllb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jlzpjpbyh secondary"/><path class="primary zssxllb4r"/></g>`,
		"fallback": "iconaut:at-sign-duotone",
	});
}

export default Component;
