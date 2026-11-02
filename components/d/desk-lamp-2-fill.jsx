import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5474o8re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5474o8re"/>`,
		"fallback": "mingcute:desk-lamp-2-fill",
	});
}

export default Component;
