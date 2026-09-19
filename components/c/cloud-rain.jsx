import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfrb8nbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfrb8nbca"/>`,
		"fallback": "boxicons:cloud-rain",
	});
}

export default Component;
