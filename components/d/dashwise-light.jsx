import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii_k7qbqv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii_k7qbqv"/>`,
		"fallback": "selfhst:dashwise-light",
	});
}

export default Component;
