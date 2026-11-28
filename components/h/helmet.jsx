import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu_p-r0dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu_p-r0dn"/>`,
		"fallback": "noviair-light:helmet",
	});
}

export default Component;
