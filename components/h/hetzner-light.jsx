import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyyv7kb3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyyv7kb3r"/>`,
		"fallback": "selfhst:hetzner-light",
	});
}

export default Component;
