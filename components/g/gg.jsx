import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oagrx1-ci.css';

const viewBox = {"width":1920,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oagrx1-ci"/>`,
		"fallback": "fa:gg",
	});
}

export default Component;
