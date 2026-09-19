import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk9loab2h.css';

const viewBox = {"width":512,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk9loab2h"/>`,
		"fallback": "ps:battery-charge",
	});
}

export default Component;
