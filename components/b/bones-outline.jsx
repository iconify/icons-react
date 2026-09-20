import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqy7ssh9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sqy7ssh9a"/>`,
		"fallback": "solar:bones-outline",
	});
}

export default Component;
