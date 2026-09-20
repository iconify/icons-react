import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe3x9j2kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe3x9j2kq"/>`,
		"fallback": "mingcute:alipay-line",
	});
}

export default Component;
