import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyrziqb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyrziqb0r"/>`,
		"fallback": "keyline-icons:face-frown",
	});
}

export default Component;
