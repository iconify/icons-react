import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdwtbc9eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdwtbc9eq"/>`,
		"fallback": "tabler:alert-square-filled",
	});
}

export default Component;
