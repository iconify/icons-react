import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr1_5-ayd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr1_5-ayd"/>`,
		"fallback": "zondicons:align-right",
	});
}

export default Component;
