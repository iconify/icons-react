import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsim1g_de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsim1g_de"/>`,
		"fallback": "mingcute:arrow-down-wide-narrow-fill",
	});
}

export default Component;
