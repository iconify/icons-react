import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byko31bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byko31bit"/>`,
		"fallback": "boxicons:arrow-big-left-filled",
	});
}

export default Component;
