import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ochdq0byd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ochdq0byd"/>`,
		"fallback": "ant-design:audit-outline",
	});
}

export default Component;
