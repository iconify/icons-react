import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxec7rbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxec7rbyh"/>`,
		"fallback": "lucide:gantt-chart",
	});
}

export default Component;
