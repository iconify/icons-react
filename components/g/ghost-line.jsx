import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz6y_2_gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz6y_2_gi"/>`,
		"fallback": "mingcute:ghost-line",
	});
}

export default Component;
