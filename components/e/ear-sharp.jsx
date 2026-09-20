import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuah0ubun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuah0ubun"/>`,
		"fallback": "keyline-icons:ear-sharp",
	});
}

export default Component;
