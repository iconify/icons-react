import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt4z2i14a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt4z2i14a"/>`,
		"fallback": "selfhst:ephemera",
	});
}

export default Component;
