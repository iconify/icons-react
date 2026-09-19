import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asux9-iud.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asux9-iud"/>`,
		"fallback": "fa6-brands:css",
	});
}

export default Component;
