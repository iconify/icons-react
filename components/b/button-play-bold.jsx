import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyy0mledw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyy0mledw"/>`,
		"fallback": "streamline-ultimate:button-play-bold",
	});
}

export default Component;
