import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpm6hqb9g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpm6hqb9g"/>`,
		"fallback": "lineicons:android-original",
	});
}

export default Component;
