import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmgh4mdbv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmgh4mdbv"/>`,
		"fallback": "garden:check-double-stroke-16",
	});
}

export default Component;
