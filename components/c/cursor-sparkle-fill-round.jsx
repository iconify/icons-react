import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo-u1wbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo-u1wbfe"/>`,
		"fallback": "coolicons:cursor-sparkle-fill-round",
	});
}

export default Component;
