import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2y4w9b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2y4w9b8d"/>`,
		"fallback": "thesvg-color:flipboard",
	});
}

export default Component;
