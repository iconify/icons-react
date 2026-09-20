import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1iw_e_7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1iw_e_7x"/>`,
		"fallback": "uil:folder-lock",
	});
}

export default Component;
