import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh4wrolxu.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh4wrolxu"/>`,
		"fallback": "ps:bonnet",
	});
}

export default Component;
