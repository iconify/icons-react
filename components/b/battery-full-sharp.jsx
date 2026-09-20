import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4zkhxbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4zkhxbic"/>`,
		"fallback": "keyline-icons:battery-full-sharp",
	});
}

export default Component;
