import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yor-hx2rw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yor-hx2rw"/>`,
		"fallback": "selfhst:composetoolbox-dark",
	});
}

export default Component;
