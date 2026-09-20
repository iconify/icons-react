import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tusma5k3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tusma5k3g"/>`,
		"fallback": "mdi:alphabet-w-circle-outline",
	});
}

export default Component;
