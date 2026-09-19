import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh070wbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh070wbmd"/>`,
		"fallback": "cbi:essential-oil-diffuser-alt",
	});
}

export default Component;
