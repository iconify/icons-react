import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4n-2yb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z4n-2yb9x"/>`,
		"fallback": "solar:balls-outline",
	});
}

export default Component;
