import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iymt_0y7r.css';
import '../../css/g/g09c4wa3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iymt_0y7r"/><path clip-rule="evenodd" class="g09c4wa3p"/></g>`,
		"fallback": "gg:font-height",
	});
}

export default Component;
