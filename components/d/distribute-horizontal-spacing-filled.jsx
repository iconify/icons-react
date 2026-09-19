import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1z93w91l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j1z93w91l"/>`,
		"fallback": "griddy-icons:distribute-horizontal-spacing-filled",
	});
}

export default Component;
