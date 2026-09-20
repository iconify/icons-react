import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6p1hq_xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6p1hq_xu"/>`,
		"fallback": "simple-icons:heliumbrowser",
	});
}

export default Component;
