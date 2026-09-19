import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2f5krd8k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2f5krd8k"/>`,
		"fallback": "whh:firstaid",
	});
}

export default Component;
