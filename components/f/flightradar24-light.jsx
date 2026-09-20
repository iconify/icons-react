import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iax57h7ct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iax57h7ct"/>`,
		"fallback": "selfhst:flightradar24-light",
	});
}

export default Component;
