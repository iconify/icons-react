import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpvhgkb9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpvhgkb9d"/>`,
		"fallback": "selfhst:dji-logbook-light",
	});
}

export default Component;
