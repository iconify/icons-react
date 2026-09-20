import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rris4gp7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rris4gp7m"/>`,
		"fallback": "reicon:instagram-filled",
	});
}

export default Component;
