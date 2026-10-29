import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zwv6xob-p.css';
import '../../css/y/yrnv22bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zwv6xob-p"/><path class="yrnv22bjh"/></g>`,
		"fallback": "withicons:bone-duo",
	});
}

export default Component;
