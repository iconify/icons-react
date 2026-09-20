import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrnfgtxba.css';

const viewBox = {"width":164,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrnfgtxba"/>`,
		"fallback": "thesvg-color:honeycomb-dark",
	});
}

export default Component;
