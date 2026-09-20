import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq48p7xon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq48p7xon"/>`,
		"fallback": "proicons:arrow-sync-2",
	});
}

export default Component;
