import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-ff33bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-ff33bdj"/>`,
		"fallback": "tabler:device-mobile-pin",
	});
}

export default Component;
