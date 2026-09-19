import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3etuu25j.css';
import '../../css/y/y5pksnbfj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3etuu25j"/><path class="y5pksnbfj"/>`,
		"fallback": "famicons:baseball",
	});
}

export default Component;
