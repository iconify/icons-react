import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeljpqb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeljpqb3q"/>`,
		"fallback": "mingcute:a-arrow-up-fill",
	});
}

export default Component;
