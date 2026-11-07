import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtol7-b-x.css';
import '../../css/d/dma0xkbxb.css';
import '../../css/u/u36hnrvrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtol7-b-x"/><path class="dma0xkbxb"/><path class="u36hnrvrx"/>`,
		"fallback": "solar:bill-cross-bold-duotone",
	});
}

export default Component;
