import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi1kefnqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi1kefnqd"/>`,
		"fallback": "pixelarticons:dollar",
	});
}

export default Component;
