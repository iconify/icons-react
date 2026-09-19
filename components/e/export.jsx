import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx1f7dbps.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx1f7dbps"/>`,
		"fallback": "codicon:export",
	});
}

export default Component;
