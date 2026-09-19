import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wot1e0bkv.css';
import '../../css/d/drdla2-9e.css';
import '../../css/w/wdin9-bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wot1e0bkv"/><circle class="drdla2-9e"/><circle class="wdin9-bzn"/>`,
		"fallback": "bx:bx-car",
	});
}

export default Component;
