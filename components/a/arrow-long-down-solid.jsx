import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhcem-b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nhcem-b1k"/>`,
		"fallback": "heroicons:arrow-long-down-solid",
	});
}

export default Component;
