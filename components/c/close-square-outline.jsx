import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4v33c6ft.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4v33c6ft"/>`,
		"fallback": "ant-design:close-square-outline",
	});
}

export default Component;
