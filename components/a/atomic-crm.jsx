import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy9a1bbus.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy9a1bbus"/>`,
		"fallback": "selfhst:atomic-crm",
	});
}

export default Component;
