import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1rocbb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1rocbb2t"/>`,
		"fallback": "mingcute:home-wifi-fill",
	});
}

export default Component;
