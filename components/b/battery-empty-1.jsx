import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmhakjb6k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmhakjb6k"/>`,
		"fallback": "streamline:battery-empty-1",
	});
}

export default Component;
