import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqb7atbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqb7atbpy"/>`,
		"fallback": "si:check-line",
	});
}

export default Component;
