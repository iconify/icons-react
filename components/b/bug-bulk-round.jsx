import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4gf10dmz.css';
import '../../css/g/g55uqgb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4gf10dmz"/><path class="g55uqgb3x"/></g>`,
		"fallback": "coolicons:bug-bulk-round",
	});
}

export default Component;
