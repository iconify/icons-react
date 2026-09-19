import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n03cc7bmp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n03cc7bmp"/>`,
		"fallback": "heroicons:academic-cap-20-solid",
	});
}

export default Component;
