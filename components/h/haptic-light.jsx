import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij621sbil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij621sbil"/>`,
		"fallback": "selfhst:haptic-light",
	});
}

export default Component;
