import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/my5gt4brc.css';
import '../../css/h/h36pi06vn.css';
import '../../css/j/jqftzccni.css';
import '../../css/y/ymo2a1b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="my5gt4brc"/><path class="h36pi06vn"/><path class="jqftzccni"/><path class="ymo2a1b_n"/></g>`,
		"fallback": "streamline-logos:bilibili-logo",
	});
}

export default Component;
