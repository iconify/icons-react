import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0gd1lu9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0gd1lu9k"/>`,
		"fallback": "coolicons:heart-alt-fill-round",
	});
}

export default Component;
