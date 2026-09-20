import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4o572rxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4o572rxk"/>`,
		"fallback": "thesvg:adyen",
	});
}

export default Component;
