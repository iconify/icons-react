import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu122ac1g.css';
import '../../css/s/s0ax18b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu122ac1g"/><path class="s0ax18b1m"/>`,
		"fallback": "eva:arrowhead-right-fill",
	});
}

export default Component;
