import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z23r0f8ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z23r0f8ry"/>`,
		"fallback": "hugeicons:cancel-01",
	});
}

export default Component;
