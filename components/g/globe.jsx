import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab1dbfbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab1dbfbtb"/>`,
		"fallback": "keyline-icons:globe",
	});
}

export default Component;
