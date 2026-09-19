import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le-2l4b9f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le-2l4b9f"/>`,
		"fallback": "carbon:chart-area-stepper",
	});
}

export default Component;
