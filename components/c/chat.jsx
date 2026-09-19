import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn7_n8brm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn7_n8brm"/>`,
		"fallback": "ps:chat",
	});
}

export default Component;
