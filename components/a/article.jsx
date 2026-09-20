import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2ol43b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2ol43b7k"/>`,
		"fallback": "pixelarticons:article",
	});
}

export default Component;
