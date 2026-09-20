import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf6gux1us.css';
import '../../css/e/ern0ub08k.css';
import '../../css/m/m_yra-oga.css';
import '../../css/w/w6y3w3bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rf6gux1us"/><path clip-rule="evenodd" class="ern0ub08k"/><path clip-rule="evenodd" class="m_yra-oga"/><path clip-rule="evenodd" class="w6y3w3bcq"/></g>`,
		"fallback": "solar:headphones-round-sound-bold",
	});
}

export default Component;
