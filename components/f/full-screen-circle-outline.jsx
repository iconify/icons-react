import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v49232f_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v49232f_z"/>`,
		"fallback": "solar:full-screen-circle-outline",
	});
}

export default Component;
