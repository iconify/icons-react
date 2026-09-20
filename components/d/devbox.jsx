import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi5e1i3tl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi5e1i3tl"/>`,
		"fallback": "thesvg-color:devbox",
	});
}

export default Component;
