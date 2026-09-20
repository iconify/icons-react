import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa3r_abyj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa3r_abyj"/>`,
		"fallback": "selfhst:eigenfocus-light",
	});
}

export default Component;
