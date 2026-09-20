import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4tuu_d8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4tuu_d8n"/>`,
		"fallback": "tabler:carambola",
	});
}

export default Component;
