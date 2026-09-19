import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yypt_uvpx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yypt_uvpx"/>`,
		"fallback": "ant-design:android-outline",
	});
}

export default Component;
