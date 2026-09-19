import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utpfh0bvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utpfh0bvu"/>`,
		"fallback": "ion:arrow-graph-down-left",
	});
}

export default Component;
