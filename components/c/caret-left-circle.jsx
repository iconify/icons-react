import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utvslpn-z.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utvslpn-z"/>`,
		"fallback": "zmdi:caret-left-circle",
	});
}

export default Component;
