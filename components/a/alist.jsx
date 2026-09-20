import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbm_e0byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbm_e0byn"/>`,
		"fallback": "thesvg-color:alist",
	});
}

export default Component;
