import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo_m2acat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo_m2acat"/>`,
		"fallback": "tabler:device-mobile-cog",
	});
}

export default Component;
