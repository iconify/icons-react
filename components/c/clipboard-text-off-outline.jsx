import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv_3ycb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv_3ycb5s"/>`,
		"fallback": "mdi:clipboard-text-off-outline",
	});
}

export default Component;
