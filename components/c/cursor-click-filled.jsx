import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or953jb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or953jb6p"/>`,
		"fallback": "boxicons:cursor-click-filled",
	});
}

export default Component;
