import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh46zz4eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh46zz4eg"/>`,
		"fallback": "mingcute:file-star-fill",
	});
}

export default Component;
