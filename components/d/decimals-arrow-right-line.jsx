import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aanrabcaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aanrabcaj"/>`,
		"fallback": "mingcute:decimals-arrow-right-line",
	});
}

export default Component;
