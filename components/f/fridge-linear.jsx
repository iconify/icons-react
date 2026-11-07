import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bub6scbyt.css';
import '../../css/c/c7zikwrvh.css';
import '../../css/f/f08krvjen.css';
import '../../css/x/xc_fo9bdv.css';
import '../../css/f/f26ggybga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bub6scbyt"/><path class="c7zikwrvh"/><path class="f08krvjen"/><path class="xc_fo9bdv"/><path class="f26ggybga"/></g>`,
		"fallback": "solar:fridge-linear",
	});
}

export default Component;
