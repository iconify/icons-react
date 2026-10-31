import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-o-g9hiq.css';
import '../../css/t/tkalyqbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f-o-g9hiq"/><path class="tkalyqbxr"/></g>`,
		"fallback": "coolicons:google-bulk-round",
	});
}

export default Component;
