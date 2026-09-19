import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1pbj0p4v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1pbj0p4v"/>`,
		"fallback": "devicon-plain:archlinux-wordmark",
	});
}

export default Component;
