import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu24de9vz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu24de9vz"/>`,
		"fallback": "cil:grid-slash",
	});
}

export default Component;
