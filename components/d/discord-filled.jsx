import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asqqf3q6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asqqf3q6b"/>`,
		"fallback": "griddy-icons:discord-filled",
	});
}

export default Component;
