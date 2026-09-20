import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppkjwabgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppkjwabgd"/>`,
		"fallback": "tabler:device-vision-pro-wifi",
	});
}

export default Component;
