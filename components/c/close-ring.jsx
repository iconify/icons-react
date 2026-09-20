import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4youg6gn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4youg6gn"/>`,
		"fallback": "lets-icons:close-ring",
	});
}

export default Component;
