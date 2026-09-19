import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoofr1q7y.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoofr1q7y"/>`,
		"fallback": "ant-design:bg-colors-outline",
	});
}

export default Component;
