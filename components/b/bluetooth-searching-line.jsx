import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvsj64bfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvsj64bfy"/>`,
		"fallback": "mingcute:bluetooth-searching-line",
	});
}

export default Component;
