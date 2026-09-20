import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5-yy215v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5-yy215v"/>`,
		"fallback": "mdi:flash-red-eye",
	});
}

export default Component;
