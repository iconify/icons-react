import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddd6gmb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddd6gmb-z"/>`,
		"fallback": "mingcute:house-2-fill",
	});
}

export default Component;
