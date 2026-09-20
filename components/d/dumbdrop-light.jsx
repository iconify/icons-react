import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvimtok6s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvimtok6s"/>`,
		"fallback": "selfhst:dumbdrop-light",
	});
}

export default Component;
