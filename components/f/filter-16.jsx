import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtiv9jbtf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtiv9jbtf"/>`,
		"fallback": "octicon:filter-16",
	});
}

export default Component;
