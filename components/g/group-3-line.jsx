import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgb_9abwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgb_9abwd"/>`,
		"fallback": "mingcute:group-3-line",
	});
}

export default Component;
