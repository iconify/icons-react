import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jom0v3bvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jom0v3bvv"/>`,
		"fallback": "selfhst:grav-dark",
	});
}

export default Component;
