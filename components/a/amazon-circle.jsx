import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykkks98ie.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykkks98ie"/>`,
		"fallback": "ant-design:amazon-circle",
	});
}

export default Component;
