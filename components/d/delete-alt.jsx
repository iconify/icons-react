import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efu0u547c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efu0u547c"/>`,
		"fallback": "mono-icons:delete-alt",
	});
}

export default Component;
