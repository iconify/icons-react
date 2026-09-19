import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6-73bo-j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6-73bo-j"/>`,
		"fallback": "ant-design:bilibili-outlined",
	});
}

export default Component;
