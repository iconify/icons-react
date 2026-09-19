import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s66i86wmr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s66i86wmr"/>`,
		"fallback": "charm:arrow-down",
	});
}

export default Component;
