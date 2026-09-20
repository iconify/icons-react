import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds5e4p7zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds5e4p7zc"/>`,
		"fallback": "keyline-icons:bell-minus-sharp",
	});
}

export default Component;
