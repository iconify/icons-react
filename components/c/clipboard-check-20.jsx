import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3i5l3b6q.css';
import '../../css/t/to0kfkbmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3i5l3b6q"/><path class="to0kfkbmi"/>`,
		"fallback": "energy-icons:clipboard-check-20",
	});
}

export default Component;
