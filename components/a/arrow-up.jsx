import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw6aov9hv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw6aov9hv"/>`,
		"fallback": "charm:arrow-up",
	});
}

export default Component;
