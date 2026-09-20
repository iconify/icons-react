import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4q6x8k5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c4q6x8k5z"/>`,
		"fallback": "reicon:fullscreen-circle",
	});
}

export default Component;
