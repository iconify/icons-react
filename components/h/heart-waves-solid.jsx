import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md_u1obyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md_u1obyv"/>`,
		"fallback": "mynaui:heart-waves-solid",
	});
}

export default Component;
