import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nybo0qh_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nybo0qh_t"/>`,
		"fallback": "selfhst:fli-so-light",
	});
}

export default Component;
