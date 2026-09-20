import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na5e8db9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="na5e8db9s"/>`,
		"fallback": "reicon:alert-square-filled",
	});
}

export default Component;
