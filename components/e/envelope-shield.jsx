import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7a_1ab1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7a_1ab1e"/>`,
		"fallback": "uil:envelope-shield",
	});
}

export default Component;
