import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elp4ijr-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elp4ijr-l"/>`,
		"fallback": "mingcute:book-6-fill",
	});
}

export default Component;
