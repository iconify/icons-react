import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6m0izbtz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6m0izbtz"/>`,
		"fallback": "selfhst:grass-io",
	});
}

export default Component;
