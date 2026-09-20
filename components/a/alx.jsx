import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi2iq4b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi2iq4b2b"/>`,
		"fallback": "simple-icons:alx",
	});
}

export default Component;
