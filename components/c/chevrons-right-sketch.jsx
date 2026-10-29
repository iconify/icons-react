import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dt464gbll.css';
import '../../css/l/lprg8mgvy.css';
import '../../css/d/dvwvpibet.css';
import '../../css/u/u4ulct2az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dt464gbll wm-k"/><path class="lprg8mgvy wm-a"/><path class="dvwvpibet wm-k"/><path class="u4ulct2az wm-a"/></g>`,
		"fallback": "withicons:chevrons-right-sketch",
	});
}

export default Component;
