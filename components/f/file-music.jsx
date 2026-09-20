import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3q2uzggj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3q2uzggj"/>`,
		"fallback": "mdi:file-music",
	});
}

export default Component;
