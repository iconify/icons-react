import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fflgkj7tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fflgkj7tr"/>`,
		"fallback": "si:arrow-upward-circle-fill",
	});
}

export default Component;
