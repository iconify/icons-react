import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq_y6cb7x.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq_y6cb7x"/>`,
		"fallback": "ps:backpack",
	});
}

export default Component;
