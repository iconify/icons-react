import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0lrd7bto.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0lrd7bto"/>`,
		"fallback": "fontisto:fire",
	});
}

export default Component;
