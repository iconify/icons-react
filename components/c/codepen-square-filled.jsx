import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyze-2b7i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyze-2b7i"/>`,
		"fallback": "ant-design:codepen-square-filled",
	});
}

export default Component;
