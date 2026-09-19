import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws4hu2e0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws4hu2e0g"/>`,
		"fallback": "bxs:caret-up-circle",
	});
}

export default Component;
