import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5flc7b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5flc7b_p"/>`,
		"fallback": "pixelarticons:aspect-ratio-sharp",
	});
}

export default Component;
