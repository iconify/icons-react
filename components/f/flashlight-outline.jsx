import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6zucbh0c.css';
import '../../css/f/fgg0yce0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x6zucbh0c"/><path clip-rule="evenodd" class="fgg0yce0a"/></g>`,
		"fallback": "solar:flashlight-outline",
	});
}

export default Component;
