import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clmd0uhan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clmd0uhan"/>`,
		"fallback": "noviair:bag-plus",
	});
}

export default Component;
