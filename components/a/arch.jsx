import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teh5i7b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teh5i7b0u"/>`,
		"fallback": "mdi:arch",
	});
}

export default Component;
