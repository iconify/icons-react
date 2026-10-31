import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lw-f55xaj.css';
import '../../css/l/ljv1ika9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lw-f55xaj"/><path class="ljv1ika9a"/></g>`,
		"fallback": "coolicons:castle-bulk-round",
	});
}

export default Component;
