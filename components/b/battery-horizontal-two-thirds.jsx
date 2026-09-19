import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua926lwtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ua926lwtx"/>`,
		"fallback": "griddy-icons:battery-horizontal-two-thirds",
	});
}

export default Component;
