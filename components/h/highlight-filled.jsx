import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywa-3-i-r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywa-3-i-r"/>`,
		"fallback": "ant-design:highlight-filled",
	});
}

export default Component;
