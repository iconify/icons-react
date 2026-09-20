import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oojeu4z1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oojeu4z1b"/>`,
		"fallback": "selfhst:donetick-dark",
	});
}

export default Component;
