import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0agoab9n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0agoab9n"/>`,
		"fallback": "ant-design:camera-filled",
	});
}

export default Component;
