import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4ujxob5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4ujxob5s"/>`,
		"fallback": "mdi:colour-helper",
	});
}

export default Component;
