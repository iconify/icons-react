import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep5ouyb5v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep5ouyb5v"/>`,
		"fallback": "roentgen:gazette",
	});
}

export default Component;
