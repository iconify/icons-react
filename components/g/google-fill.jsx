import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xluqg_7ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xluqg_7ia"/>`,
		"fallback": "mingcute:google-fill",
	});
}

export default Component;
