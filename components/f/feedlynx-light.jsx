import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icg58v2mf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icg58v2mf"/>`,
		"fallback": "selfhst:feedlynx-light",
	});
}

export default Component;
