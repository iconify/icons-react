import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tzzoh_b1t.css';
import '../../css/y/yu7ul0sdx.css';
import '../../css/s/siba6g8kr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="tzzoh_b1t"/><path class="yu7ul0sdx"/><path class="siba6g8kr"/></g>`,
		"fallback": "streamline:champagne-party-alcohol",
	});
}

export default Component;
