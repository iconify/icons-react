import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bijs8_3je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bijs8_3je"/>`,
		"fallback": "mingcute:google-fill",
	});
}

export default Component;
