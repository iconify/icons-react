import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eozj1cb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eozj1cb-i"/>`,
		"fallback": "mono-icons:arrow-right-up",
	});
}

export default Component;
