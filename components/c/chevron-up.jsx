import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjk91bc9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjk91bc9b"/>`,
		"fallback": "akar-icons:chevron-up",
	});
}

export default Component;
