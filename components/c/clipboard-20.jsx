import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3i5l3b6q.css';
import '../../css/v/v8kul2btm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3i5l3b6q"/><path class="v8kul2btm"/>`,
		"fallback": "energy-icons:clipboard-20",
	});
}

export default Component;
