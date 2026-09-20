import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r368m6s7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r368m6s7u"/>`,
		"fallback": "mdi:email-refresh",
	});
}

export default Component;
