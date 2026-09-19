import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3eb5-b5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3eb5-b5a"/>`,
		"fallback": "ion:build",
	});
}

export default Component;
