import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo10oacue.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo10oacue"/>`,
		"fallback": "fontisto:flash",
	});
}

export default Component;
