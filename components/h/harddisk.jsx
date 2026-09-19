import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy1jyjb2i.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy1jyjb2i"/>`,
		"fallback": "whh:harddisk",
	});
}

export default Component;
