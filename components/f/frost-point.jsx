import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jopy93b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jopy93b_s"/>`,
		"fallback": "mdi:frost-point",
	});
}

export default Component;
