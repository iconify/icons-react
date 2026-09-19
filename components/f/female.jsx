import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv37qvdmx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv37qvdmx"/>`,
		"fallback": "ion:female",
	});
}

export default Component;
