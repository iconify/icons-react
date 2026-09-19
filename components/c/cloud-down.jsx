import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh078gb1v.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh078gb1v"/>`,
		"fallback": "fontisto:cloud-down",
	});
}

export default Component;
