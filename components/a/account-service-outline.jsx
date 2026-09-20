import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxjx6cxid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxjx6cxid"/>`,
		"fallback": "mdi:account-service-outline",
	});
}

export default Component;
