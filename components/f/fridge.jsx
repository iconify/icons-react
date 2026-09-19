import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiep-3mai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiep-3mai"/>`,
		"fallback": "hugeicons:fridge",
	});
}

export default Component;
