import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9uvf3b6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e9uvf3b6q"/>`,
		"fallback": "keyline-icons:circle-align-offset-left-fill",
	});
}

export default Component;
