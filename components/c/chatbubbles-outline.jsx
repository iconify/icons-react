import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri6_m1b9d.css';
import '../../css/v/v4jtutbyn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri6_m1b9d"/><path class="v4jtutbyn"/>`,
		"fallback": "ion:chatbubbles-outline",
	});
}

export default Component;
