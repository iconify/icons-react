import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo_v0662r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo_v0662r"/>`,
		"fallback": "ri:goggles-line",
	});
}

export default Component;
