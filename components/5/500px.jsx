import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wav8b0bty.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wav8b0bty"/>`,
		"fallback": "fa7-brands:500px",
	});
}

export default Component;
