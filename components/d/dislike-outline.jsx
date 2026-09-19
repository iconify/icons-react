import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz4zh1bif.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz4zh1bif"/>`,
		"fallback": "ant-design:dislike-outline",
	});
}

export default Component;
