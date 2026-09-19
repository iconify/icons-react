import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr1-5sbgo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr1-5sbgo"/>`,
		"fallback": "ant-design:alipay-outlined",
	});
}

export default Component;
