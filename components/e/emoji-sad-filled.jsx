import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n56hsbciy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n56hsbciy"/>`,
		"fallback": "reicon:emoji-sad-filled",
	});
}

export default Component;
