import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd0h3wb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd0h3wb9e"/>`,
		"fallback": "solar:end-call-rounded-linear",
	});
}

export default Component;
