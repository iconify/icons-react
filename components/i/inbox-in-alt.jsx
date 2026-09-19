import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl866acnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wl866acnz"/>`,
		"fallback": "griddy-icons:inbox-in-alt",
	});
}

export default Component;
