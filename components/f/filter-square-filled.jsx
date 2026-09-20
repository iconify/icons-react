import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6yl7xz3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6yl7xz3u"/>`,
		"fallback": "reicon:filter-square-filled",
	});
}

export default Component;
