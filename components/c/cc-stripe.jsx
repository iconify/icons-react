import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igjziwzis.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igjziwzis"/>`,
		"fallback": "fa-brands:cc-stripe",
	});
}

export default Component;
