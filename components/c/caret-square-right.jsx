import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4ujn99zd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4ujn99zd"/>`,
		"fallback": "fa7-solid:caret-square-right",
	});
}

export default Component;
