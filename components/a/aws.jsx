import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdjboku7l.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdjboku7l"/>`,
		"fallback": "fa6-brands:aws",
	});
}

export default Component;
