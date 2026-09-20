import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtq5nabky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtq5nabky"/>`,
		"fallback": "selfhst:forms-md-dark",
	});
}

export default Component;
