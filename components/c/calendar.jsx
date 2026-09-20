import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5el1oasr.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5el1oasr"/>`,
		"fallback": "memory:calendar",
	});
}

export default Component;
