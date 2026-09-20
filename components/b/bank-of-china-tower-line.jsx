import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znt4c7btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znt4c7btl"/>`,
		"fallback": "mingcute:bank-of-china-tower-line",
	});
}

export default Component;
