import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srz6vzznd.css';

const viewBox = {"width":666,"height":644};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srz6vzznd"/>`,
		"fallback": "ls:aligncenter",
	});
}

export default Component;
