import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w6xc4d38y.css';
import '../../css/q/q0od8ou_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w6xc4d38y"/><path class="q0od8ou_l"/></g>`,
		"fallback": "tabler:arrow-autofit-up-filled",
	});
}

export default Component;
