import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyce6dy-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyce6dy-j"/>`,
		"fallback": "griddy-icons:blood-pressure-filled",
	});
}

export default Component;
