import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2549tb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2549tb-c"/>`,
		"fallback": "mingcute:hammer-line",
	});
}

export default Component;
