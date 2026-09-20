import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyq4gbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkyq4gbzu"/>`,
		"fallback": "mingcute:bus-line",
	});
}

export default Component;
