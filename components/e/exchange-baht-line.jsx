import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6f7gj65i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6f7gj65i"/>`,
		"fallback": "mingcute:exchange-baht-line",
	});
}

export default Component;
