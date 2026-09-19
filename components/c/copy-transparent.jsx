import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j66vk4b0q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j66vk4b0q"/>`,
		"fallback": "gravity-ui:copy-transparent",
	});
}

export default Component;
