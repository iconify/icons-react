import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa_y8xbat.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa_y8xbat"/>`,
		"fallback": "selfhst:atomic-crm-light",
	});
}

export default Component;
