import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx441kbdz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx441kbdz"/>`,
		"fallback": "ant-design:behance-circle",
	});
}

export default Component;
