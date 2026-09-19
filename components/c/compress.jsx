import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aty5o6b6r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aty5o6b6r"/>`,
		"fallback": "ant-design:compress",
	});
}

export default Component;
