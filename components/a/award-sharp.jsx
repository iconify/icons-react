import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd2iq_8mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd2iq_8mh"/>`,
		"fallback": "keyline-icons:award-sharp",
	});
}

export default Component;
