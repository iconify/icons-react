import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo5dafbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo5dafbrp"/>`,
		"fallback": "mingcute:clock-line",
	});
}

export default Component;
