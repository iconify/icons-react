import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_uink9fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_uink9fs"/>`,
		"fallback": "mage:calendar-minus-fill",
	});
}

export default Component;
