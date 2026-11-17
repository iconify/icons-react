import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwqnu2b7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwqnu2b7d"/>`,
		"fallback": "selfhst:chirpstack-dark",
	});
}

export default Component;
