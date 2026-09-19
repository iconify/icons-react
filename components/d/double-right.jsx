import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfd8uw_5q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfd8uw_5q"/>`,
		"fallback": "ant-design:double-right",
	});
}

export default Component;
