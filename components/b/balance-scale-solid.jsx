import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-3desbsk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-3desbsk"/>`,
		"fallback": "la:balance-scale-solid",
	});
}

export default Component;
