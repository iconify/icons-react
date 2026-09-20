import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdrb4cbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdrb4cbxu"/>`,
		"fallback": "keyline-icons:filter",
	});
}

export default Component;
