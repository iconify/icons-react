import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe4o03z-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe4o03z-z"/>`,
		"fallback": "selfhst:costco",
	});
}

export default Component;
