import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hui4rqb0z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hui4rqb0z"/>`,
		"fallback": "ant-design:car-outline",
	});
}

export default Component;
