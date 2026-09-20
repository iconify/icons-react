import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/d/d4oe1undt.css';
import '../../css/v/vvv4ggldq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="d4oe1undt"/><path class="vvv4ggldq"/></g>`,
		"fallback": "tdesign:chart-median",
	});
}

export default Component;
