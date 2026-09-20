import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y29-hdc1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y29-hdc1i"/>`,
		"fallback": "thesvg:fusionauth",
	});
}

export default Component;
