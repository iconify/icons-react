import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r71172b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r71172b4k"/>`,
		"fallback": "keyline-icons:chevrons-right",
	});
}

export default Component;
