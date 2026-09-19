import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0nlblb9h.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0nlblb9h"/>`,
		"fallback": "fontisto:euro",
	});
}

export default Component;
