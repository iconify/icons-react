import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0zcg-b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0zcg-b2c"/>`,
		"fallback": "mingcute:auction-fill",
	});
}

export default Component;
