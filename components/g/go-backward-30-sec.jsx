import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/mtdeygbej.css';
import '../../css/v/v0x2tob3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="mtdeygbej"/><path class="v0x2tob3v"/></g>`,
		"fallback": "hugeicons:go-backward-30-sec",
	});
}

export default Component;
