import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqd_e4bob.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqd_e4bob"/>`,
		"fallback": "garden:align-justify-stroke-12",
	});
}

export default Component;
