import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gohu6iwfv.css';
import '../../css/n/nvpuepb1q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gohu6iwfv"/><path class="nvpuepb1q"/></g>`,
		"fallback": "streamline-flex:chat-bubble-square-phone",
	});
}

export default Component;
