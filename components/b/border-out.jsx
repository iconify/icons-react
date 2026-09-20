import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmex0u96m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmex0u96m"/>`,
		"fallback": "uis:border-out",
	});
}

export default Component;
