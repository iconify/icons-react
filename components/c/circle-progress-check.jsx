import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iav74rk7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iav74rk7y"/>`,
		"fallback": "keyline-icons:circle-progress-check",
	});
}

export default Component;
