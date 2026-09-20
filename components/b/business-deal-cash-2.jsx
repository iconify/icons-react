import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdsz5c2ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdsz5c2ms"/>`,
		"fallback": "streamline-ultimate:business-deal-cash-2",
	});
}

export default Component;
