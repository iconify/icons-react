import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uljo4f1yo.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uljo4f1yo"/>`,
		"fallback": "hugeicons:image-flip-horizontal",
	});
}

export default Component;
