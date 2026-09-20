import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-xii8b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-xii8b2r"/>`,
		"fallback": "pixelarticons:cpu",
	});
}

export default Component;
