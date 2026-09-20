import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-kj1jbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-kj1jbpc"/>`,
		"fallback": "keyline-icons:crown",
	});
}

export default Component;
