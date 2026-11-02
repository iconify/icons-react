import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fko8p9bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fko8p9bhv"/>`,
		"fallback": "mingcute:card-pay-line",
	});
}

export default Component;
