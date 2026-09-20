import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnh_3dhgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnh_3dhgd"/>`,
		"fallback": "pixelarticons:instagram-solid",
	});
}

export default Component;
