import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra9ry8b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra9ry8b0o"/>`,
		"fallback": "keyline-icons:heading-1",
	});
}

export default Component;
