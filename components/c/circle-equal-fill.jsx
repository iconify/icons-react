import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8p2reb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8p2reb8c"/>`,
		"fallback": "mingcute:circle-equal-fill",
	});
}

export default Component;
