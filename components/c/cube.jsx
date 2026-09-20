import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j744k2xay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j744k2xay"/>`,
		"fallback": "proicons:cube",
	});
}

export default Component;
