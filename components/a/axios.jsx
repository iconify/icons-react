import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt4xzsbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt4xzsbrm"/>`,
		"fallback": "thesvg-color:axios",
	});
}

export default Component;
