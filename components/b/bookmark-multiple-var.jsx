import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vty1z-btt.css';
import '../../css/l/louektrjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vty1z-btt"/><path class="louektrjo"/></g>`,
		"fallback": "proicons:bookmark-multiple-var",
	});
}

export default Component;
