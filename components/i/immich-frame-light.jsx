import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4ngnyf6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4ngnyf6p"/>`,
		"fallback": "selfhst:immich-frame-light",
	});
}

export default Component;
