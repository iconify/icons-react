import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3lw51fjp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3lw51fjp"/>`,
		"fallback": "codicon:arrow-circle-up",
	});
}

export default Component;
