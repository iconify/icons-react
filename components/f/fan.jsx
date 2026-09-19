import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_o9s2byh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_o9s2byh"/>`,
		"fallback": "fa7-solid:fan",
	});
}

export default Component;
