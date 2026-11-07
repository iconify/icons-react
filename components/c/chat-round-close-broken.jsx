import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mp18y-ypb.css';
import '../../css/i/i31i05kmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mp18y-ypb"/><path class="i31i05kmz"/></g>`,
		"fallback": "solar:chat-round-close-broken",
	});
}

export default Component;
