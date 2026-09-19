import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q026oo9wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q026oo9wp"/>`,
		"fallback": "grommet-icons:chat-option",
	});
}

export default Component;
