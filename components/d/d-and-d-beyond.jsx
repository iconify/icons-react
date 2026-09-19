import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in-8debth.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in-8debth"/>`,
		"fallback": "fa7-brands:d-and-d-beyond",
	});
}

export default Component;
