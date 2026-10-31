import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bn1n52bsl.css';
import '../../css/o/ozfjm_ueb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bn1n52bsl"/><path class="ozfjm_ueb"/></g>`,
		"fallback": "coolicons:airplay-bulk-round",
	});
}

export default Component;
