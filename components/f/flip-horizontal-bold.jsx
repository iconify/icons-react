import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvxdh9bth.css';
import '../../css/h/hejbqv3cp.css';
import '../../css/p/p_2wznb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvxdh9bth"/><path class="hejbqv3cp"/><path clip-rule="evenodd" class="p_2wznb7m"/>`,
		"fallback": "solar:flip-horizontal-bold",
	});
}

export default Component;
