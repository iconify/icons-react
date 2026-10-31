import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9znh2twl.css';
import '../../css/j/jeke5b99r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9znh2twl"/><path class="jeke5b99r"/></g>`,
		"fallback": "coolicons:columns-duotone-round",
	});
}

export default Component;
