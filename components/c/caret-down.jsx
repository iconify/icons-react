import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0cks-b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0cks-b7w"/>`,
		"fallback": "keyline-icons:caret-down",
	});
}

export default Component;
