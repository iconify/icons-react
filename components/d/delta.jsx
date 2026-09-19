import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si6upyb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si6upyb3p"/>`,
		"fallback": "cbi:delta",
	});
}

export default Component;
