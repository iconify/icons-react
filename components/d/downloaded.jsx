import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mq23_lbqv.css';
import '../../css/b/b2t_-1bzm.css';
import '../../css/g/gqreh8bws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mq23_lbqv"/><path clip-rule="evenodd" class="b2t_-1bzm"/><path class="gqreh8bws"/></g>`,
		"fallback": "nrk:downloaded",
	});
}

export default Component;
