import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eq3frqb0l.css';
import '../../css/w/w7840lb7v.css';
import '../../css/w/w2ry4c86y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eq3frqb0l"/><path class="w7840lb7v"/><path class="w2ry4c86y"/></g>`,
		"fallback": "solar:chat-square-warning-linear",
	});
}

export default Component;
