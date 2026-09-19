import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5s6drg7i.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5s6drg7i"/>`,
		"fallback": "fa6-brands:fonticons",
	});
}

export default Component;
