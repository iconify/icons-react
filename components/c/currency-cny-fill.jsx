import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzu302yje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vzu302yje"/>`,
		"fallback": "mingcute:currency-cny-fill",
	});
}

export default Component;
