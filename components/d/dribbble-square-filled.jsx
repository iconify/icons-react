import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-77igb4q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-77igb4q"/>`,
		"fallback": "ant-design:dribbble-square-filled",
	});
}

export default Component;
