import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9rhm9n5k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9rhm9n5k"/>`,
		"fallback": "selfhst:airtrail-dark",
	});
}

export default Component;
