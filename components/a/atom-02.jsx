import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i_ocz4bfi.css';
import '../../css/k/kbkcdjbmr.css';
import '../../css/v/v2jut0b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path clip-rule="evenodd" class="i_ocz4bfi"/><path clip-rule="evenodd" class="kbkcdjbmr"/><path class="v2jut0b8b"/></g>`,
		"fallback": "hugeicons:atom-02",
	});
}

export default Component;
