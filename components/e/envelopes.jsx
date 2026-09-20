import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ldd-o4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ldd-o4t"/>`,
		"fallback": "uil:envelopes",
	});
}

export default Component;
