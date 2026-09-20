import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byxbbwb7m.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byxbbwb7m"/>`,
		"fallback": "system-uicons:graph-bar",
	});
}

export default Component;
