import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggiwcjb0u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggiwcjb0u"/>`,
		"fallback": "ant-design:filter-filled",
	});
}

export default Component;
