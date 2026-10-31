import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wia-d7b4n.css';
import '../../css/j/js-e70p_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wia-d7b4n"/><path class="js-e70p_q"/></g>`,
		"fallback": "coolicons:heart-alt-duotone-round",
	});
}

export default Component;
