import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzonbq2mj.css';
import '../../css/h/hfatccbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzonbq2mj"/><path class="hfatccbwj"/></g>`,
		"fallback": "coolicons:backpack-bulk-round",
	});
}

export default Component;
