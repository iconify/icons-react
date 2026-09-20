import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vla12_51k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vla12_51k"/>`,
		"fallback": "lets-icons:insta-fill",
	});
}

export default Component;
