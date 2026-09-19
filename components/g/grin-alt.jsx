import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4z47fb_l.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4z47fb_l"/>`,
		"fallback": "fa-regular:grin-alt",
	});
}

export default Component;
