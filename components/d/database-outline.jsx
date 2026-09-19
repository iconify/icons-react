import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q73q2ewlo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q73q2ewlo"/>`,
		"fallback": "ant-design:database-outline",
	});
}

export default Component;
