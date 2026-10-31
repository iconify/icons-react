import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqh0zy0bn.css';
import '../../css/j/jqd5i3btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fqh0zy0bn"/><path class="jqd5i3btc"/></g>`,
		"fallback": "coolicons:barcode-bulk-round",
	});
}

export default Component;
