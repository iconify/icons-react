import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz1sgacqa.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz1sgacqa"/>`,
		"fallback": "ant-design:fire-outlined",
	});
}

export default Component;
