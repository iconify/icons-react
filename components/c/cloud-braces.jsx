import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfmjmwb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfmjmwb_x"/>`,
		"fallback": "mdi:cloud-braces",
	});
}

export default Component;
