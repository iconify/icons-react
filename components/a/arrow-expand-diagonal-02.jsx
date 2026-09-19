import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-pn7fboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-pn7fboi"/>`,
		"fallback": "hugeicons:arrow-expand-diagonal-02",
	});
}

export default Component;
