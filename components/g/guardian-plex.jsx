import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw2zl7-aa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw2zl7-aa"/>`,
		"fallback": "selfhst:guardian-plex",
	});
}

export default Component;
