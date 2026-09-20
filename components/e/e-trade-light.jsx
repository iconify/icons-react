import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp2db-b0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp2db-b0h"/>`,
		"fallback": "selfhst:e-trade-light",
	});
}

export default Component;
