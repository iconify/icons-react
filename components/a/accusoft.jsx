import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9_ix79gu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9_ix79gu"/>`,
		"fallback": "la:accusoft",
	});
}

export default Component;
