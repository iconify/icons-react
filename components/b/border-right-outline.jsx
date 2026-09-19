import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_rj89vzf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_rj89vzf"/>`,
		"fallback": "ant-design:border-right-outline",
	});
}

export default Component;
