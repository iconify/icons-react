import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpwt8db9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpwt8db9t"/>`,
		"fallback": "selfhst:ignidash-light",
	});
}

export default Component;
