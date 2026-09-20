import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1aff5b5g.css';
import '../../css/i/irw5v3uiq.css';
import '../../css/w/wwyuwacdr.css';
import '../../css/c/c2hja6b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1aff5b5g"/><path class="irw5v3uiq"/><path class="wwyuwacdr"/><path class="c2hja6b2n"/></g>`,
		"fallback": "solar:bag-2-bold-duotone",
	});
}

export default Component;
