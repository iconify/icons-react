import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca2inabwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca2inabwl"/>`,
		"fallback": "selfhst:aol-light",
	});
}

export default Component;
