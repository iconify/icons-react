import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr3a5n0ia.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr3a5n0ia"/>`,
		"fallback": "fa7-brands:earlybirds",
	});
}

export default Component;
