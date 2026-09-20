import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rra3jebig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rra3jebig"/>`,
		"fallback": "pixelarticons:drag-and-drop-sharp",
	});
}

export default Component;
