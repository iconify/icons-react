import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwen0ablh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwen0ablh"/>`,
		"fallback": "ant-design:inbox-outlined",
	});
}

export default Component;
