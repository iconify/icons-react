import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix285gbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix285gbjn"/>`,
		"fallback": "vadivam:book-open-check",
	});
}

export default Component;
