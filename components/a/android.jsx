import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g83s5tbcq.css';

const viewBox = {"width":657,"height":770};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g83s5tbcq"/>`,
		"fallback": "ls:android",
	});
}

export default Component;
