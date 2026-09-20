import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfqal6bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfqal6bid"/>`,
		"fallback": "si:dollar-fill",
	});
}

export default Component;
