import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbr5azbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbr5azbyt"/>`,
		"fallback": "reicon:face-smile2-filled",
	});
}

export default Component;
