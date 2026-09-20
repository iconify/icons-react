import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1qd13b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1qd13b-t"/>`,
		"fallback": "pixelarticons:arrow-up-box-sharp",
	});
}

export default Component;
