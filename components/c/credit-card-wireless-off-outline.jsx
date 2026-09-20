import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs13v40bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs13v40bl"/>`,
		"fallback": "mdi:credit-card-wireless-off-outline",
	});
}

export default Component;
