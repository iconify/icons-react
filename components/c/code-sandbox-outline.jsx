import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu5g34bge.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu5g34bge"/>`,
		"fallback": "ant-design:code-sandbox-outline",
	});
}

export default Component;
