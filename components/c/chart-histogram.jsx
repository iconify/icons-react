import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dan00jbdz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dan00jbdz"/>`,
		"fallback": "carbon:chart-histogram",
	});
}

export default Component;
