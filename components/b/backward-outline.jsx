import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft6q_l44f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft6q_l44f"/>`,
		"fallback": "ant-design:backward-outline",
	});
}

export default Component;
