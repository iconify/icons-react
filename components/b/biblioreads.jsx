import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-ek6gb7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-ek6gb7o"/>`,
		"fallback": "selfhst:biblioreads",
	});
}

export default Component;
