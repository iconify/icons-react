import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6hhcjbid.css';
import '../../css/r/ryyiu8v4m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6hhcjbid"/><path class="ryyiu8v4m"/>`,
		"fallback": "flat-color-icons:frame",
	});
}

export default Component;
