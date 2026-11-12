import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpdkwn6lf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpdkwn6lf"/>`,
		"fallback": "selfhst:caddy-dark",
	});
}

export default Component;
