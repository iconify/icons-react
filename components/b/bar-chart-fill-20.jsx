import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joiq4kbkm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joiq4kbkm"/>`,
		"fallback": "garden:bar-chart-fill-20",
	});
}

export default Component;
