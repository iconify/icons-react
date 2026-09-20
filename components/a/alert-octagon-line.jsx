import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhi4-9wtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhi4-9wtp"/>`,
		"fallback": "mingcute:alert-octagon-line",
	});
}

export default Component;
