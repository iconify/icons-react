import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb6h6wkcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb6h6wkcn"/>`,
		"fallback": "withicons:car-solid",
	});
}

export default Component;
