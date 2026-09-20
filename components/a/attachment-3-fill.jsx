import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mco0w3z_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mco0w3z_p"/>`,
		"fallback": "mingcute:attachment-3-fill",
	});
}

export default Component;
