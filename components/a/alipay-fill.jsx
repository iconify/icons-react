import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu72-xdxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu72-xdxl"/>`,
		"fallback": "mingcute:alipay-fill",
	});
}

export default Component;
