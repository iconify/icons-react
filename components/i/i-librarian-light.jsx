import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueisbo96q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueisbo96q"/>`,
		"fallback": "selfhst:i-librarian-light",
	});
}

export default Component;
