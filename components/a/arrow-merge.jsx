import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg-sl6llt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg-sl6llt"/>`,
		"fallback": "at-icons:arrow-merge",
	});
}

export default Component;
