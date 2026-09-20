import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agzhzlb8s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agzhzlb8s"/>`,
		"fallback": "raphael:fullcube",
	});
}

export default Component;
