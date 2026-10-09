import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/the3ypbjg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="the3ypbjg"/>`,
		"fallback": "energy-icons:iceberg-20-bold",
	});
}

export default Component;
