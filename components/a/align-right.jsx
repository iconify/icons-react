import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt7x1qbse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt7x1qbse"/>`,
		"fallback": "ooui:align-right",
	});
}

export default Component;
