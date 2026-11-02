import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qibd9rb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qibd9rb1d"/>`,
		"fallback": "mingcute:box-4-line",
	});
}

export default Component;
