import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-m6d5_2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-m6d5_2k"/>`,
		"fallback": "coolicons:circle-chevron-right-fill-round",
	});
}

export default Component;
