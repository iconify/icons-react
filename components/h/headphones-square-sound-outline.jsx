import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rajmnv0sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rajmnv0sl"/>`,
		"fallback": "solar:headphones-square-sound-outline",
	});
}

export default Component;
