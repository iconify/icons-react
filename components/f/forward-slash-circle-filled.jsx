import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0f8p3u2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0f8p3u2a"/>`,
		"fallback": "boxicons:forward-slash-circle-filled",
	});
}

export default Component;
