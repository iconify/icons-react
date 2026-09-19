import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw9wzvb0p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw9wzvb0p"/>`,
		"fallback": "ant-design:baidu-outlined",
	});
}

export default Component;
