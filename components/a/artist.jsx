import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r42o0bbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r42o0bbcj"/>`,
		"fallback": "mdi:artist",
	});
}

export default Component;
