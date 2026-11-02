import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m400souyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m400souyk"/>`,
		"fallback": "mingcute:heart-check-fill",
	});
}

export default Component;
