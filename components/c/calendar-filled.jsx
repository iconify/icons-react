import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1024j9lq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1024j9lq"/>`,
		"fallback": "ant-design:calendar-filled",
	});
}

export default Component;
