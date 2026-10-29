import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfi_ynbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfi_ynbhu"/>`,
		"fallback": "withicons:book-open-check-solid",
	});
}

export default Component;
