import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjs_kmb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjs_kmb6l"/>`,
		"fallback": "noviair:image-lock",
	});
}

export default Component;
