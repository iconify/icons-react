import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjm9yabjl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjm9yabjl"/>`,
		"fallback": "game-icons:cardboard-box-closed",
	});
}

export default Component;
