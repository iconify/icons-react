import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdtzqfxwt.css';
import '../../css/t/tx9vi1y_m.css';
import '../../css/t/tr7cg_bss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdtzqfxwt"/><path class="tx9vi1y_m"/><path class="tr7cg_bss"/>`,
		"fallback": "selfhst:dawarich-light",
	});
}

export default Component;
