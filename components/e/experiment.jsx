import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm4_r2bnh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm4_r2bnh"/>`,
		"fallback": "ant-design:experiment",
	});
}

export default Component;
