import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_pbdbb0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_pbdbb0u"/>`,
		"fallback": "selfhst:amurex-light",
	});
}

export default Component;
