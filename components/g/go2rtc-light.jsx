import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt448_byy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt448_byy"/>`,
		"fallback": "selfhst:go2rtc-light",
	});
}

export default Component;
