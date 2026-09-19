import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr7womf9b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr7womf9b"/>`,
		"fallback": "garden:face-sad-stroke-12",
	});
}

export default Component;
