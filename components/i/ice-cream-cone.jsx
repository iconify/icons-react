import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/g4e8mdjga.css';
import '../../css/q/qumy_vbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="g4e8mdjga"/><path class="qumy_vbsa"/></g>`,
		"fallback": "hugeicons:ice-cream-cone",
	});
}

export default Component;
