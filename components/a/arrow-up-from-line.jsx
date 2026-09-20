import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on_0wn7zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on_0wn7zj"/>`,
		"fallback": "lucide:arrow-up-from-line",
	});
}

export default Component;
