import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j37dud1kz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j37dud1kz"/>`,
		"fallback": "gravity-ui:arrow-shape-right-to-line",
	});
}

export default Component;
