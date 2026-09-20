import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmx758bjt.css';
import '../../css/g/g6rzu6bev.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmx758bjt"/><path class="g6rzu6bev"/>`,
		"fallback": "vaadin:cog-o",
	});
}

export default Component;
