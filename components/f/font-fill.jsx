import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzx24fbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzx24fbqi"/>`,
		"fallback": "mingcute:font-fill",
	});
}

export default Component;
