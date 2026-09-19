import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc4qgwbxt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc4qgwbxt"/>`,
		"fallback": "ant-design:info",
	});
}

export default Component;
