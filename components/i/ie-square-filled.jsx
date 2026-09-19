import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2dxxfbqg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2dxxfbqg"/>`,
		"fallback": "ant-design:ie-square-filled",
	});
}

export default Component;
