import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ygumw4bny.css';
import '../../css/i/inspuobox.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ygumw4bny"/><path clip-rule="evenodd" class="inspuobox"/></g>`,
		"fallback": "heroicons:battery-100-16-solid",
	});
}

export default Component;
