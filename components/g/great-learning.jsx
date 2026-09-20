import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwv2phcpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwv2phcpn"/>`,
		"fallback": "thesvg-color:great-learning",
	});
}

export default Component;
