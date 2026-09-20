import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueg6d4b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueg6d4b6k"/>`,
		"fallback": "simple-icons:g2a",
	});
}

export default Component;
