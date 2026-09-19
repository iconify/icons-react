import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt6q08rtd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt6q08rtd"/>`,
		"fallback": "ant-design:arrow-down",
	});
}

export default Component;
