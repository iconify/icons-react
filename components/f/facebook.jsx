import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w015b6byh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w015b6byh"/>`,
		"fallback": "cib:facebook",
	});
}

export default Component;
