import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn9svcbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn9svcbpu"/>`,
		"fallback": "noviair:arrow-circle-up",
	});
}

export default Component;
