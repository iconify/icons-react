import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lu6f09uxb.css';
import '../../css/j/jlxvahb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lu6f09uxb"/><path class="jlxvahb-b"/></g>`,
		"fallback": "coolicons:discord-duotone-round",
	});
}

export default Component;
