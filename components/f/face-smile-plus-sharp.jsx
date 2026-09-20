import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjekp7b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjekp7b3n"/>`,
		"fallback": "keyline-icons:face-smile-plus-sharp",
	});
}

export default Component;
