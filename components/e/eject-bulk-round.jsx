import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7smq1bzv.css';
import '../../css/t/tm-7tqbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g7smq1bzv"/><path class="tm-7tqbxw"/></g>`,
		"fallback": "coolicons:eject-bulk-round",
	});
}

export default Component;
