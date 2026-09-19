import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s64ll3bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s64ll3bht"/>`,
		"fallback": "boxicons:cursor-filled",
	});
}

export default Component;
