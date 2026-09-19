import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oum0u3bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oum0u3bbs"/>`,
		"fallback": "boxicons:chevrons-left-right",
	});
}

export default Component;
