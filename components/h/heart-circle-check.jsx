import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq13o3pul.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq13o3pul"/>`,
		"fallback": "fa7-solid:heart-circle-check",
	});
}

export default Component;
