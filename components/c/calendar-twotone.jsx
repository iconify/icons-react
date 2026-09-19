import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cklww9brb.css';
import '../../css/i/i0mrvmytj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cklww9brb"/><path class="i0mrvmytj"/>`,
		"fallback": "ant-design:calendar-twotone",
	});
}

export default Component;
