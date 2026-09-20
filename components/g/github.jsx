import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgxa5ewbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgxa5ewbp"/>`,
		"fallback": "pixel:github",
	});
}

export default Component;
