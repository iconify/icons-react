import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuo_0fbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuo_0fbjj"/>`,
		"fallback": "coolicons:bus-round",
	});
}

export default Component;
