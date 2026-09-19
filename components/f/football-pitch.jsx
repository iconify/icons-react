import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt3j8_u0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt3j8_u0u"/>`,
		"fallback": "boxicons:football-pitch",
	});
}

export default Component;
