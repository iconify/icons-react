import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opddyw7xs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opddyw7xs"/>`,
		"fallback": "fa7-solid:external-link-square",
	});
}

export default Component;
