import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv2ku9rbv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv2ku9rbv"/>`,
		"fallback": "system-uicons:expand",
	});
}

export default Component;
