import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wur6xfp1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wur6xfp1w"/>`,
		"fallback": "mingcute:i-mac-fill",
	});
}

export default Component;
