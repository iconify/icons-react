import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8r5mgc6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8r5mgc6y"/>`,
		"fallback": "keyline-icons:corner-left-up-fill",
	});
}

export default Component;
