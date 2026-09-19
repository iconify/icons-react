import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eibxe6d8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eibxe6d8o"/>`,
		"fallback": "ci:first-page",
	});
}

export default Component;
