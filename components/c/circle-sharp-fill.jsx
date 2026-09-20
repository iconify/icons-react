import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp_eem7eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp_eem7eg"/>`,
		"fallback": "keyline-icons:circle-sharp-fill",
	});
}

export default Component;
