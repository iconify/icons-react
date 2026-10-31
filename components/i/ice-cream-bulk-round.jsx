import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npkifbcpj.css';
import '../../css/l/ldkxcoxeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="npkifbcpj"/><path class="ldkxcoxeq"/></g>`,
		"fallback": "coolicons:ice-cream-bulk-round",
	});
}

export default Component;
