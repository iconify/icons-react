import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_uc7ttho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_uc7ttho"/>`,
		"fallback": "mingcute:cake-line",
	});
}

export default Component;
