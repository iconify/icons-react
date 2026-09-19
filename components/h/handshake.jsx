import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/in9uhxb8u.css';
import '../../css/q/qklq2bwet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="in9uhxb8u"/><path class="qklq2bwet"/></g>`,
		"fallback": "hugeicons:handshake",
	});
}

export default Component;
