import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa8tgxnep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa8tgxnep"/>`,
		"fallback": "keyline-icons:audio-lines",
	});
}

export default Component;
