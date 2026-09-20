import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxy8o6b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxy8o6b0c"/>`,
		"fallback": "tdesign:gesture-pray-filled",
	});
}

export default Component;
