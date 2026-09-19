import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6fkriojo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6fkriojo"/>`,
		"fallback": "hugeicons:arrow-down-right-02",
	});
}

export default Component;
