import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ph0ccpa.css';
import '../../css/u/uxitrobbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6ph0ccpa"/><path class="uxitrobbq"/>`,
		"fallback": "mage:delivery-truck-fill",
	});
}

export default Component;
