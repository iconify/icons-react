import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz2n7j-_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz2n7j-_l"/>`,
		"fallback": "selfhst:fider-light",
	});
}

export default Component;
