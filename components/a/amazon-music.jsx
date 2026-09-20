import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4mhi4b6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4mhi4b6u"/>`,
		"fallback": "selfhst:amazon-music",
	});
}

export default Component;
