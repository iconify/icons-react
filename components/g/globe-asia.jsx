import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsl2m0bqa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsl2m0bqa"/>`,
		"fallback": "fa7-solid:globe-asia",
	});
}

export default Component;
