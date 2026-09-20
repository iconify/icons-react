import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhh071ixv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhh071ixv"/>`,
		"fallback": "mdi:basket-check-outline",
	});
}

export default Component;
