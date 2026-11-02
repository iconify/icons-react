import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k442f7l-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k442f7l-a"/>`,
		"fallback": "mingcute:ease-out-fill",
	});
}

export default Component;
