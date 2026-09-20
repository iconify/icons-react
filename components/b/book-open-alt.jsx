import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0a_ztbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0a_ztbxh"/>`,
		"fallback": "lets-icons:book-open-alt",
	});
}

export default Component;
