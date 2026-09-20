import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps8b0vb0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps8b0vb0o"/>`,
		"fallback": "selfhst:guardian-plex-light",
	});
}

export default Component;
