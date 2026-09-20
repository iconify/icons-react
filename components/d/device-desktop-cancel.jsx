import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4l_q6qfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4l_q6qfz"/>`,
		"fallback": "tabler:device-desktop-cancel",
	});
}

export default Component;
