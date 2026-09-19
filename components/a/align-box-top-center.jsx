import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blj85pqph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blj85pqph"/>`,
		"fallback": "hugeicons:align-box-top-center",
	});
}

export default Component;
