import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms-jk-ohc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms-jk-ohc"/>`,
		"fallback": "cbi:hwam-4560",
	});
}

export default Component;
