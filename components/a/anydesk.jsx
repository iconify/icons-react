import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf3d_3bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf3d_3bxz"/>`,
		"fallback": "simple-icons:anydesk",
	});
}

export default Component;
