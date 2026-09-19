import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1pc15b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1pc15b0a"/>`,
		"fallback": "cbi:alarm-dot-com",
	});
}

export default Component;
