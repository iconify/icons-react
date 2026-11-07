import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zha06kbme.css';
import '../../css/s/sej9af0wr.css';
import '../../css/i/ie2u0c9xt.css';
import '../../css/c/cx31vwdjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zha06kbme"/><path class="sej9af0wr"/><path class="ie2u0c9xt"/><path class="cx31vwdjv"/></g>`,
		"fallback": "solar:chat-square-code-line-duotone",
	});
}

export default Component;
