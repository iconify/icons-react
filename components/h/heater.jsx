import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnv1z5w0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnv1z5w0f"/>`,
		"fallback": "mynaui:heater",
	});
}

export default Component;
