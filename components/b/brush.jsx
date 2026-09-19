import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms7r-wb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms7r-wb-e"/>`,
		"fallback": "boxicons:brush",
	});
}

export default Component;
