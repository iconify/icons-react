import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tppyano9r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tppyano9r"/>`,
		"fallback": "fa7-brands:facebook",
	});
}

export default Component;
