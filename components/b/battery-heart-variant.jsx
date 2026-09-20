import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhqc-30ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhqc-30ds"/>`,
		"fallback": "mdi:battery-heart-variant",
	});
}

export default Component;
