import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxonjtbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxonjtbhf"/>`,
		"fallback": "uil:expand-arrows-alt",
	});
}

export default Component;
