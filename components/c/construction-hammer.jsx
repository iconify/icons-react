import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy1ef0rgn.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy1ef0rgn"/>`,
		"fallback": "lineicons:construction-hammer",
	});
}

export default Component;
