import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzjt250kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzjt250kh"/>`,
		"fallback": "coolicons:currency-dollar-fill-round",
	});
}

export default Component;
