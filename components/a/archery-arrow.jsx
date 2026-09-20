import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x67dcf5cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x67dcf5cr"/>`,
		"fallback": "tabler:archery-arrow",
	});
}

export default Component;
