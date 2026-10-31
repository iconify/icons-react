import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxqj-0svr.css';
import '../../css/j/jaek4jbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxqj-0svr"/><path class="jaek4jbvq"/></g>`,
		"fallback": "coolicons:banknote-duotone-round",
	});
}

export default Component;
