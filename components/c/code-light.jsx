import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auabr42fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auabr42fn"/>`,
		"fallback": "lets-icons:code-light",
	});
}

export default Component;
